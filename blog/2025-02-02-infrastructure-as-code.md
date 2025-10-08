---
slug: infrastructure-as-code-security
title: Securing Infrastructure as Code with Pentora
authors: [pentora_team]
tags: [iac, terraform, kubernetes, cloudformation]
---

Infrastructure as Code has revolutionized deployment, but misconfigurations can lead to serious security issues. Learn how to catch IaC security problems before they reach production.

<!-- truncate -->

## IaC Security Challenges

Common security issues in Infrastructure as Code:

- **Misconfigurations**: Overly permissive access, unencrypted storage
- **Hardcoded Secrets**: Credentials in configuration files
- **Compliance Violations**: Non-compliant resource settings
- **Policy Violations**: Resources that don't meet security standards

## Terraform Security

### Scan Terraform Code

```bash
# Scan Terraform directory
pentora scan terraform --directory ./infrastructure

# Scan specific files
pentora scan terraform --files main.tf,variables.tf

# Before applying changes
terraform plan -out=tfplan
pentora scan terraform --plan-file tfplan --fail-on high,critical
terraform apply tfplan
```

### Common Issues and Fixes

#### Unencrypted Storage

```hcl
# ❌ Bad - No encryption
resource "aws_s3_bucket" "data" {
  bucket = "my-data-bucket"
}

# ✅ Good - Encrypted
resource "aws_s3_bucket" "data" {
  bucket = "my-data-bucket"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "data" {
  bucket = aws_s3_bucket.data.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.bucket_key.arn
    }
  }
}
```

#### Overly Permissive Security Groups

```hcl
# ❌ Bad - Open to internet
resource "aws_security_group" "web" {
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # SSH from anywhere!
  }
}

# ✅ Good - Restricted access
resource "aws_security_group" "web" {
  # HTTP/HTTPS from internet
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # SSH only from office
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["203.0.113.0/24"]
  }
}
```

#### Weak IAM Policies

```hcl
# ❌ Bad - Wildcard permissions
resource "aws_iam_policy" "app" {
  policy = jsonencode({
    Statement = [{
      Effect   = "Allow"
      Action   = "*"
      Resource = "*"
    }]
  })
}

# ✅ Good - Least privilege
resource "aws_iam_policy" "app" {
  policy = jsonencode({
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject"
        ]
        Resource = "arn:aws:s3:::my-app-bucket/*"
      },
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem"
        ]
        Resource = aws_dynamodb_table.app.arn
      }
    ]
  })
}
```

## CloudFormation Security

```bash
# Scan CloudFormation template
pentora scan cloudformation --template stack.yaml

# Scan directory
pentora scan cloudformation --directory ./cloudformation
```

Example fix:

```yaml
# ❌ Bad - Public S3 bucket
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      PublicAccessBlockConfiguration:
        BlockPublicAcls: false

# ✅ Good - Private and encrypted
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        BlockPublicPolicy: true
        IgnorePublicAcls: true
        RestrictPublicBuckets: true
      BucketEncryption:
        ServerSideEncryptionConfiguration:
          - ServerSideEncryptionByDefault:
              SSEAlgorithm: AES256
```

## Kubernetes Security

### Scan Manifests

```bash
# Scan Kubernetes files
pentora scan kubernetes --file deployment.yaml

# Scan directory
pentora scan kubernetes --directory ./k8s
```

### Common Issues

#### Running as Root

```yaml
# ❌ Bad - Runs as root
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:1.0

# ✅ Good - Non-root with security context
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000

      containers:
      - name: myapp
        image: myapp:1.0
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          capabilities:
            drop: [ALL]
```

#### Missing Resource Limits

```yaml
# ❌ Bad - No limits
containers:
- name: myapp
  image: myapp:1.0

# ✅ Good - Resource limits defined
containers:
- name: myapp
  image: myapp:1.0
  resources:
    requests:
      memory: "128Mi"
      cpu: "250m"
    limits:
      memory: "256Mi"
      cpu: "500m"
```

## CI/CD Integration

### Pre-Commit Hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

echo "Scanning IaC files..."

TF_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.tf$')

if [ -n "$TF_FILES" ]; then
    pentora scan terraform --files $TF_FILES --fail-on high,critical
    if [ $? -ne 0 ]; then
        echo "❌ Terraform security issues found"
        exit 1
    fi
fi

echo "✅ Security checks passed"
```

### GitHub Actions

```yaml
name: IaC Security

on:
  pull_request:
    paths:
      - '**.tf'
      - '**.yaml'

jobs:
  iac-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Scan Terraform
        run: |
          pentora scan terraform --directory ./terraform \
            --output-format sarif \
            --output terraform.sarif

      - name: Scan Kubernetes
        run: |
          pentora scan kubernetes --directory ./k8s \
            --output-format sarif \
            --output k8s.sarif

      - name: Upload Results
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: |
            terraform.sarif
            k8s.sarif

      - name: Security Gate
        run: |
          pentora scan terraform --directory ./terraform --max-critical 0
          pentora scan kubernetes --directory ./k8s --max-critical 0
```

## Policy as Code

Define custom security policies:

```yaml
# .pentora/policy.yaml
policies:
  - name: "Encryption Required"
    rule: |
      resources[?type=='aws_s3_bucket'].all {
        encryption_enabled == true
      }
    severity: error

  - name: "No Wildcard IAM"
    rule: |
      resources[?type=='aws_iam_policy'].all {
        !contains(actions, '*')
      }
    severity: error

  - name: "Security Groups Restricted"
    rule: |
      resources[?type=='aws_security_group'].all {
        !contains(cidr_blocks, '0.0.0.0/0') || port in [80, 443]
      }
    severity: error
```

Apply policies:

```bash
pentora scan terraform --directory . \
  --policy .pentora/policy.yaml \
  --fail-on-policy-violation
```

## Secrets Detection

```bash
# Scan for hardcoded secrets
pentora scan secrets --directory ./terraform

# Scan Terraform state files
pentora scan secrets --file terraform.tfstate
```

Example findings:

```
❌ [CRITICAL] AWS Access Key in main.tf
   File: main.tf:15
   Pattern: AWS_ACCESS_KEY_ID
   Fix: Use environment variables or AWS IAM roles
```

## Best Practices

1. **Scan Before Apply**: Always scan IaC before deployment
2. **Use Modules**: Leverage verified, secure modules
3. **Pin Versions**: Specify exact module versions
4. **No Secrets**: Never hardcode credentials
5. **Least Privilege**: Grant minimum required permissions
6. **Enable Encryption**: Encrypt data at rest and in transit
7. **Use Remote State**: Store Terraform state securely
8. **Enable Logging**: CloudTrail, flow logs, etc.

## Module Security

```bash
# Scan Terraform modules
pentora scan terraform --directory ./modules \
  --check-module-sources
```

Best practices:

```hcl
# ✅ Good - Pinned version from registry
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"
}

# ❌ Bad - Unpinned Git source
module "custom" {
  source = "git::https://github.com/random/repo.git"
}
```

## Compliance Scanning

Check for compliance violations:

```bash
# CIS AWS Benchmark
pentora scan terraform --directory . \
  --compliance cis-aws-1.4.0

# PCI-DSS
pentora scan terraform --directory . \
  --compliance pci-dss

# HIPAA
pentora scan terraform --directory . \
  --compliance hipaa
```

## Automated Remediation

Generate fixes automatically:

```bash
# Suggest fixes
pentora scan terraform --directory . --suggest-fixes

# Auto-fix where possible
pentora scan terraform --directory . --auto-fix
```

## Conclusion

IaC security is critical for cloud infrastructure. Pentora helps catch misconfigurations, policy violations, and security issues before deployment.

Start scanning your infrastructure code:

```bash
pentora scan terraform --directory ./infrastructure
```

For more information, visit [docs.pentora.ai/iac-security](https://docs.pentora.ai/iac-security)
