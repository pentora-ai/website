---
slug: container-security-scanning
title: Container Security Scanning Best Practices
authors: [pentora_team]
tags: [docker, containers, kubernetes, security]
---

Containers are everywhere, but they can introduce significant security risks. Learn how to scan and secure your container images with Pentora.

<!-- truncate -->

## Container Security Risks

Containers package applications with all dependencies, which means:

- **Vulnerable Base Images**: OS packages with known CVEs
- **Application Dependencies**: Vulnerable libraries (npm, pip, etc.)
- **Configuration Issues**: Running as root, exposed ports
- **Secrets in Images**: Hardcoded credentials, API keys
- **Supply Chain Attacks**: Malicious or compromised images

## Scanning Container Images

### Basic Image Scan

```bash
# Scan local image
pentora scan container nginx:latest

# Scan from registry
pentora scan container docker.io/myorg/myapp:1.0.0

# Scan before pushing
docker build -t myapp:1.0.0 .
pentora scan container myapp:1.0.0 --severity critical,high
docker push myapp:1.0.0
```

### What Pentora Checks

**OS Vulnerabilities:**
```
❌ [CRITICAL] CVE-2024-1234 in libssl1.1
   Package: libssl1.1 (1.1.1f-1ubuntu2)
   Fix: Upgrade to 1.1.1f-1ubuntu2.19
```

**Application Dependencies:**
```
❌ [HIGH] CVE-2024-5678 in express
   Package: express@4.16.0
   Fix: Upgrade to express@4.18.2
```

**Configuration Issues:**
```
⚠️  [HIGH] Container runs as root
   Recommendation: Add USER directive in Dockerfile

❌ [MEDIUM] Port 22 (SSH) exposed
   Recommendation: Remove SSH from container
```

**Secrets Detection:**
```
❌ [CRITICAL] AWS Access Key in /app/.env
   Location: Layer 8, /app/.env:12
```

## Dockerfile Best Practices

### Use Minimal Base Images

```dockerfile
# ❌ Bad - Large attack surface
FROM ubuntu:latest

# ✅ Good - Minimal image
FROM alpine:3.18

# ✅ Better - Distroless
FROM gcr.io/distroless/nodejs:18
```

### Run as Non-Root

```dockerfile
# ❌ Bad
FROM node:18
COPY . /app
WORKDIR /app
CMD ["node", "server.js"]

# ✅ Good
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app
USER appuser
CMD ["node", "server.js"]
```

### Multi-Stage Builds

Reduce image size and attack surface:

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
USER appuser
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

### Pin Versions

```dockerfile
# ❌ Bad
FROM node:latest

# ✅ Good
FROM node:18.19.0-alpine3.18
```

## Kubernetes Security

### Scan Kubernetes Manifests

```bash
# Scan deployment files
pentora scan kubernetes --file deployment.yaml

# Scan entire directory
pentora scan kubernetes --directory ./k8s
```

### Secure Deployment Example

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  template:
    spec:
      # Pod-level security
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000
        seccompProfile:
          type: RuntimeDefault

      containers:
      - name: myapp
        image: myapp:1.2.3  # ✅ Specific version
        imagePullPolicy: Always

        # Container-level security
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          capabilities:
            drop: [ALL]

        # Resource limits
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 250m
            memory: 256Mi

        # Health checks
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30

        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
```

## CI/CD Integration

### Scan in GitHub Actions

```yaml
- name: Build Image
  run: docker build -t myapp:${{ github.sha }} .

- name: Scan Container
  run: |
    pentora scan container myapp:${{ github.sha }} \
      --output-format sarif \
      --output container.sarif

- name: Upload Results
  uses: github/codeql-action/upload-sarif@v2
  with:
    sarif_file: container.sarif

- name: Security Gate
  run: |
    pentora scan container myapp:${{ github.sha }} \
      --max-critical 0 \
      --max-high 5 \
      --fail-on-threshold
```

### GitLab CI Example

```yaml
container-scan:
  stage: security
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - pentora scan container $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  artifacts:
    reports:
      container_scanning: pentora-results.json
```

## Registry Scanning

Monitor container registries for vulnerabilities:

```bash
# Scan image in registry
pentora scan container registry.example.com/myapp:latest \
  --registry-auth $AUTH_TOKEN

# Continuous registry monitoring
pentora registry monitor \
  --registry-url registry.example.com \
  --namespaces production,staging \
  --schedule "0 */6 * * *"
```

## Secrets Management

### Detect Secrets

```bash
pentora scan container myapp:latest --secrets-scan
```

### Best Practices

```dockerfile
# ❌ Bad - Hardcoded
ENV DB_PASSWORD=supersecret123
ENV API_KEY=sk_live_abc123

# ✅ Good - Runtime injection
# Secrets provided via Kubernetes secrets or environment
```

Using Kubernetes secrets:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
stringData:
  db-password: mysecretpassword
  api-key: myapikey

---
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: myapp
        envFrom:
        - secretRef:
            name: app-secrets
```

## Best Practices Summary

1. **Use Minimal Base Images**: Alpine, distroless, or scratch
2. **Run as Non-Root**: Always specify non-root user
3. **Pin Versions**: Never use `:latest` tags
4. **Multi-Stage Builds**: Reduce final image size
5. **Scan Regularly**: Scan on build and continuously
6. **No Secrets in Images**: Use runtime injection
7. **Security Contexts**: Apply restrictive security policies
8. **Resource Limits**: Define CPU and memory limits
9. **Read-Only Filesystem**: When possible
10. **Drop Capabilities**: Remove unnecessary Linux capabilities

## Automated Remediation

Generate fixes automatically:

```bash
# Scan with fix suggestions
pentora scan container myapp:latest --suggest-fixes

# Generate updated Dockerfile
pentora scan dockerfile --file Dockerfile --auto-fix
```

## Monitoring and Alerting

Set up continuous monitoring:

```yaml
# pentora-monitor.yaml
registries:
  - url: registry.example.com
    namespaces: [production]
    schedule: "0 */6 * * *"

alerts:
  new_vulnerability:
    severity: [critical, high]
    notify:
      - slack: "#security"
      - email: "security@example.com"
```

```bash
pentora daemon --config pentora-monitor.yaml
```

## Conclusion

Container security requires a layered approach: secure base images, secure builds, and continuous monitoring. Pentora helps automate this process throughout the container lifecycle.

Start scanning:

```bash
pentora scan container your-image:tag
```

For more details, visit [docs.pentora.ai/container-security](https://docs.pentora.ai/container-security)
