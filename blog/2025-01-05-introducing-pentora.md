---
slug: introducing-pentora
title: Introducing Pentora - Fast & Modular Security Scanner
authors: [pentora_team]
tags: [pentora, security, announcement]
---

We're excited to introduce Pentora, a modern security scanner built for speed and extensibility. Whether you're scanning networks, web applications, containers, or cloud infrastructure, Pentora provides comprehensive security testing in one unified tool.

<!-- truncate -->

## Why Pentora?

Traditional security scanners are often slow, complex, and limited in scope. Pentora addresses these challenges with:

- **Blazing Fast Performance**: Built in Rust with multi-threaded architecture, Pentora scans 3-5x faster than traditional tools
- **Modular Design**: Plugin-based architecture lets you extend functionality without modifying the core
- **Unified Platform**: One tool for network, web, API, container, cloud, and IaC security
- **Developer-Friendly**: Clean CLI, sensible defaults, and seamless CI/CD integration
- **Open Source**: Apache 2.0 license with community-driven development

## Key Features

### Multi-Domain Scanning

```bash
# Network scanning
pentora scan network --target 192.168.1.0/24

# Web application testing
pentora scan web --url https://example.com

# Container security
pentora scan container myapp:latest

# Cloud infrastructure
pentora scan cloud --provider aws

# Infrastructure as Code
pentora scan terraform --directory ./infra
```

### Smart Vulnerability Detection

Pentora doesn't just report version numbers - it actively verifies vulnerabilities to minimize false positives. Each finding includes:

- Clear severity rating (CVSS scores)
- Exploit availability status
- Specific remediation steps
- Code examples when applicable

### CI/CD Native

Designed for automation from day one:

```yaml
# GitHub Actions example
- name: Security Scan
  run: |
    pentora scan web --url ${{ env.STAGING_URL }} \
      --fail-on critical,high \
      --output-format sarif
```

## Getting Started

Installation is simple:

```bash
# Using Homebrew
brew install pentora

# Using Docker
docker run pentora/pentora scan web https://example.com

# Direct install
curl -fsSL https://pentora.ai/install.sh | sh
```

Your first scan:

```bash
pentora scan web --url https://your-app.com
```

## What's Next?

We're actively developing:

- Advanced cloud security modules
- Enhanced plugin marketplace
- Web UI for visualization
- Machine learning-powered detection
- Enterprise features (SSO, RBAC)

## Get Involved

Pentora is open source and built by the community:

- **GitHub**: [github.com/pentora-ai/pentora](https://github.com/pentora-ai/pentora)
- **Documentation**: [docs.pentora.ai](https://docs.pentora.ai)
- **Community**: Join our [GitHub Discussions](https://github.com/pentora-ai/pentora/discussions)

Start securing your infrastructure today with Pentora!
