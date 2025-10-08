# Deployment Guide

## Overview

This project uses a two-stage deployment strategy with GitHub Actions and GitHub Pages:

- **Staging**: Auto-deploys on every push to `main` branch
- **Production**: Deploys when a GitHub Release is published

## Workflows

### 1. Staging Deployment (`deploy-staging.yml`)

**Triggers:**

- Push to `main` branch
- Manual trigger via workflow_dispatch

**Process:**

1. Build the Docusaurus site
2. Deploy to GitHub Pages (staging environment)
3. Verify deployment with health checks

**URL:** https://pentora-ai.github.io/website

### 2. Production Deployment (`deploy-production.yml`)

**Triggers:**

- GitHub Release published
- Manual trigger via workflow_dispatch

**Process:**

1. Build the Docusaurus site (production mode)
2. Deploy to GitHub Pages (production environment)
3. Verify deployment and perform performance checks

**URL:** https://pentora-ai.github.io/website

## Setup Instructions

### Initial GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - Source: `GitHub Actions`
3. Save settings

### Environment Setup (Optional)

For additional protection, you can configure environments:

1. Go to **Settings** → **Environments**
2. Create two environments:
   - `staging` (no protection rules)
   - `production` (add protection rules if needed)

### Custom Domain (Optional)

If using a custom domain:

1. Add CNAME record in DNS settings
2. Update `static/CNAME` file with your domain
3. Configure in **Settings** → **Pages** → **Custom domain**

## Usage

### Deploy to Staging

```bash
# Automatically triggered on push to main
git push origin main
```

Or manually:

1. Go to **Actions** tab
2. Select "Deploy Staging" workflow
3. Click "Run workflow"

### Deploy to Production

**Method 1: Create a Release (Recommended)**

```bash
# Create and push a tag
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# Then create a release on GitHub
# Go to: Releases → Draft a new release → Choose tag → Publish
```

**Method 2: Manual Trigger**

1. Go to **Actions** tab
2. Select "Deploy Production" workflow
3. Click "Run workflow"

## Verification

Both workflows include automated verification steps:

- HTTP status check (200 OK)
- Content verification (checks for "Pentora")
- Deployment URL validation

## Troubleshooting

### Build Fails

- Check Node.js version (should be 20)
- Verify all dependencies are in `package.json`
- Review build logs in Actions tab

### Deployment Fails

- Verify GitHub Pages is enabled
- Check repository permissions
- Ensure workflows have proper permissions

### Site Not Accessible

- Wait 1-2 minutes after deployment
- Check if DNS is configured correctly (custom domain)
- Verify base URL in `docusaurus.config.js`

## Rollback

To rollback a production deployment:

1. Create a new release from a previous commit
2. Or manually trigger production workflow on a specific branch/tag

## Best Practices

1. **Test in Staging**: Always verify changes in staging before production
2. **Use Releases**: Production deployments should be tagged releases
3. **Semantic Versioning**: Use semver for release tags (v1.0.0, v1.1.0, etc.)
4. **Monitor**: Check Actions tab regularly for failed deployments
