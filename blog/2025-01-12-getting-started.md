---
slug: getting-started-with-pentora
title: Getting Started with Pentora - Your First Security Scan
authors: [pentora_team]
tags: [tutorial, beginner, getting-started]
---

New to Pentora? This guide will get you from zero to running comprehensive security scans in just a few minutes.

<!-- truncate -->

## Installation

Choose your preferred method:

**macOS/Linux:**
```bash
curl -fsSL https://pentora.ai/install.sh | sh
```

**Homebrew:**
```bash
brew install pentora
```

**Docker:**
```bash
docker pull pentora/pentora:latest
```

**Windows:**
```powershell
choco install pentora
```

Verify installation:
```bash
pentora --version
```

## Your First Scan

Let's start with a web application scan:

```bash
pentora scan web --url https://example.com
```

Pentora will:
1. Crawl the application to discover endpoints
2. Test for common vulnerabilities (XSS, SQLi, CSRF, etc.)
3. Check security configurations (headers, TLS, etc.)
4. Generate a detailed report

## Common Scan Types

### Network Scanning

Discover hosts and services on your network:

```bash
# Quick scan
pentora scan network --target 192.168.1.0/24

# Full port scan
pentora scan network --target example.com --ports 1-65535

# With service detection
pentora scan network --target example.com --service-detection
```

### API Security Testing

Test REST or GraphQL APIs:

```bash
# Basic API scan
pentora scan api --url https://api.example.com

# With OpenAPI specification
pentora scan api --openapi https://api.example.com/swagger.json

# With authentication
pentora scan api --url https://api.example.com \
  --auth-type bearer \
  --auth-token $API_TOKEN
```

### Container Security

Scan Docker images for vulnerabilities:

```bash
# Scan local image
pentora scan container nginx:latest

# Scan from registry
pentora scan container registry.example.com/myapp:v1.0

# Scan with detailed output
pentora scan container myapp:latest --verbose
```

### Infrastructure as Code

Check Terraform, Kubernetes, or CloudFormation for misconfigurations:

```bash
# Terraform
pentora scan terraform --directory ./infrastructure

# Kubernetes manifests
pentora scan kubernetes --directory ./k8s

# Helm charts
pentora scan helm --chart ./charts/myapp
```

### Dependency Scanning

Find vulnerabilities in open source dependencies:

```bash
# Node.js
pentora scan deps --file package-lock.json

# Python
pentora scan deps --file requirements.txt

# Auto-detect all dependency files
pentora scan deps --directory .
```

## Understanding Results

Pentora uses standard severity levels:

- **Critical** (9.0-10.0): Immediate action required
- **High** (7.0-8.9): Should fix soon
- **Medium** (4.0-6.9): Plan to address
- **Low** (0.1-3.9): Consider fixing

Each finding includes:
- Clear description
- Impact assessment
- Remediation steps with code examples
- References to CVEs and security standards

## Output Formats

Generate reports in various formats:

```bash
# HTML report
pentora scan web --url example.com \
  --output-format html \
  --output report.html

# JSON for automation
pentora scan web --url example.com \
  --output-format json \
  --output results.json

# SARIF for GitHub/GitLab Security
pentora scan web --url example.com \
  --output-format sarif \
  --output results.sarif
```

## Authentication

Scan authenticated applications:

```bash
# Form-based login
pentora scan web --url https://app.example.com \
  --auth-type form \
  --login-url https://app.example.com/login \
  --username admin \
  --password $PASSWORD

# Bearer token
pentora scan api --url https://api.example.com \
  --auth-type bearer \
  --auth-token $TOKEN

# API key
pentora scan api --url https://api.example.com \
  --auth-type apikey \
  --auth-header "X-API-Key" \
  --auth-value $API_KEY
```

## CI/CD Integration

Integrate security scanning into your pipeline:

**GitHub Actions:**
```yaml
- name: Security Scan
  run: |
    pentora scan web --url ${{ env.STAGING_URL }} \
      --fail-on critical,high
```

**GitLab CI:**
```yaml
security-scan:
  script:
    - pentora scan container $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
```

**Jenkins:**
```groovy
sh 'pentora scan terraform --directory ./infra --max-critical 0'
```

## Next Steps

Now that you know the basics:

1. **Explore Advanced Features**: Custom plugins, policy as code, automation
2. **Set Up Continuous Monitoring**: Schedule regular scans
3. **Integrate with Tools**: JIRA, Slack, SIEM platforms
4. **Join the Community**: [GitHub Discussions](https://github.com/pentora-ai/pentora/discussions)

Read the full documentation at [docs.pentora.ai](https://docs.pentora.ai)

Happy scanning! 🔒
