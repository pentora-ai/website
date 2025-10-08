---
slug: integrating-pentora-cicd
title: Integrating Pentora into Your CI/CD Pipeline
authors: [pentora_team]
tags: [cicd, devops, automation, github-actions]
---

Shift security left by integrating Pentora into your CI/CD pipeline. Catch vulnerabilities before they reach production with automated security scanning.

<!-- truncate -->

## Why Security in CI/CD?

Integrating security scans into your pipeline provides:

- **Early Detection**: Find vulnerabilities when they're cheapest to fix
- **Automated Enforcement**: Block deployments with critical issues
- **Developer Feedback**: Immediate security feedback on pull requests
- **Compliance**: Meet security requirements before production
- **Cost Savings**: Fix bugs in development, not production

## GitHub Actions

Add security scanning to your GitHub workflow:

```yaml
# .github/workflows/security.yml
name: Security Scan

on:
  pull_request:
  push:
    branches: [main]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install Pentora
        run: curl -fsSL https://pentora.ai/install.sh | sh

      - name: Scan Application
        run: |
          pentora scan web --url http://localhost:3000 \
            --output-format sarif \
            --output pentora.sarif

      - name: Upload to GitHub Security
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: pentora.sarif

      - name: Block on Critical Issues
        run: |
          pentora scan web --url http://localhost:3000 \
            --max-critical 0 \
            --max-high 5 \
            --fail-on-threshold
```

### Scan on Pull Requests

Add PR comments with scan results:

```yaml
- name: Comment PR
  if: github.event_name == 'pull_request'
  uses: actions/github-script@v7
  with:
    script: |
      const fs = require('fs');
      const results = JSON.parse(fs.readFileSync('results.json'));

      const comment = `## 🔒 Security Scan Results

      - Critical: ${results.summary.critical}
      - High: ${results.summary.high}
      - Medium: ${results.summary.medium}

      ${results.summary.critical > 0 ? '❌ Critical issues found!' : '✅ No critical issues'}
      `;

      github.rest.issues.createComment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        body: comment
      });
```

## GitLab CI/CD

Integrate with GitLab pipelines:

```yaml
# .gitlab-ci.yml
stages:
  - test
  - security
  - deploy

security-scan:
  stage: security
  image: pentora/pentora:latest
  script:
    - pentora scan container $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - pentora scan terraform --directory ./infrastructure
  artifacts:
    reports:
      sast: pentora-results.json
  only:
    - merge_requests
    - main

deploy:
  stage: deploy
  needs: [security-scan]
  script:
    - ./deploy.sh
  only:
    - main
```

## Jenkins Pipeline

Add to your Jenkinsfile:

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t myapp:${BUILD_NUMBER} .'
            }
        }

        stage('Security Scan') {
            steps {
                script {
                    sh '''
                        pentora scan container myapp:${BUILD_NUMBER} \
                            --output-format json \
                            --output scan-results.json
                    '''

                    def results = readJSON file: 'scan-results.json'

                    if (results.summary.critical > 0) {
                        error("Critical vulnerabilities found!")
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker push myapp:${BUILD_NUMBER}'
            }
        }
    }

    post {
        always {
            publishHTML([
                reportDir: '.',
                reportFiles: 'scan-results.html',
                reportName: 'Security Report'
            ])
        }
    }
}
```

## CircleCI

Add to your `.circleci/config.yml`:

```yaml
version: 2.1

jobs:
  security-scan:
    docker:
      - image: cimg/base:stable
    steps:
      - checkout
      - run:
          name: Install Pentora
          command: curl -fsSL https://pentora.ai/install.sh | sh
      - run:
          name: Scan Dependencies
          command: pentora scan deps --file package-lock.json
      - run:
          name: Scan Infrastructure
          command: pentora scan terraform --directory ./infra
      - store_artifacts:
          path: pentora-report.html

workflows:
  build-and-scan:
    jobs:
      - security-scan
```

## Scan Different Targets

### Container Images

```yaml
- name: Scan Docker Image
  run: |
    docker build -t myapp:${{ github.sha }} .
    pentora scan container myapp:${{ github.sha }} \
      --max-critical 0 \
      --fail-on-threshold
```

### Infrastructure as Code

```yaml
- name: Scan Terraform
  run: |
    pentora scan terraform --directory ./infrastructure \
      --severity high,critical \
      --fail-on-findings
```

### Dependencies

```yaml
- name: Scan Dependencies
  run: |
    pentora scan deps --file package-lock.json \
      --max-critical 0 \
      --max-high 5
```

### Secrets Detection

```yaml
- name: Scan for Secrets
  run: |
    pentora scan secrets --repo . \
      --scan-history \
      --fail-on-findings
```

## Security Gates

Block deployments based on security criteria:

```yaml
- name: Security Gate
  run: |
    pentora scan web --url ${{ env.STAGING_URL }} \
      --policy-file .pentora/policy.yaml \
      --fail-on-policy-violation
```

Policy file example:

```yaml
# .pentora/policy.yaml
security_policy:
  max_critical: 0
  max_high: 5
  max_age_days: 30

  required_checks:
    - sql_injection
    - xss
    - secrets_detection
    - container_security
```

## Notifications

Send scan results to your team:

### Slack

```yaml
- name: Notify Slack
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "🚨 Security scan failed!",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Security Scan Failed*\n${{ github.repository }}"
            }
          }
        ]
      }
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### Email

```bash
pentora scan web --url example.com \
  --notify-email security@company.com \
  --notify-on critical,high
```

## Best Practices

1. **Start with Warnings**: Don't fail builds initially - gather baseline data first
2. **Gradual Rollout**:
   - Week 1: Scan and report only
   - Week 2: Block on critical
   - Week 3: Block on high
3. **Different Rules for Branches**:
   - `main`: Strict (no critical/high)
   - `develop`: Moderate (no critical)
   - Feature branches: Lenient (report only)
4. **Cache Results**: Speed up scans by caching vulnerability database
5. **Parallel Scans**: Run different scan types in parallel

## Performance Tips

Speed up CI/CD scans:

```yaml
# Cache Pentora database
- name: Cache Pentora DB
  uses: actions/cache@v3
  with:
    path: ~/.pentora/cache
    key: pentora-db-${{ hashFiles('**/package-lock.json') }}

# Run scans in parallel
- name: Parallel Scans
  run: |
    pentora scan deps --file package.json &
    pentora scan secrets --repo . &
    pentora scan terraform --directory ./infra &
    wait
```

## Conclusion

Integrating Pentora into CI/CD enables continuous security testing, catching vulnerabilities early when they're easiest and cheapest to fix. Start with basic scans, gradually increase strictness, and automate your security workflow.

Get started today:

```bash
pentora scan --help
```

Check our [CI/CD examples repository](https://github.com/pentora-ai/pentora-ci-examples) for more templates.
