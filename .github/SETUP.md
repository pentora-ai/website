# GitHub Pages Setup

## Quick Setup Checklist

Follow these steps to enable GitHub Pages deployment:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down and click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`
   - Leave other settings as default
5. Click **Save**

### 2. Verify Repository Settings

Ensure your repository has the correct settings:

- Repository name: `website`
- Visibility: Public (required for GitHub Pages on free plan)
- Default branch: `main`

### 3. Update Docusaurus Config (if needed)

Check [`docusaurus.config.js`](../docusaurus.config.js):

```js
const config = {
  url: 'https://pentora-ai.github.io',
  baseUrl: '/website/',
  organizationName: 'pentora-ai',
  projectName: 'website',
  // ...
}
```

### 4. First Deployment

**Option A: Push to main (Staging)**

```bash
git add .
git commit -m "feat: setup GitHub Pages deployment"
git push origin main
```

**Option B: Create a release (Production)**

```bash
# Create and push tag
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# Then on GitHub:
# 1. Go to Releases → Draft a new release
# 2. Choose tag: v1.0.0
# 3. Add release notes
# 4. Click "Publish release"
```

### 5. Monitor Deployment

1. Go to **Actions** tab in GitHub
2. Watch the workflow run
3. Green checkmark = successful deployment
4. Click on the workflow for detailed logs

### 6. Access Your Site

After successful deployment (1-2 minutes):

- **Staging**: https://pentora-ai.github.io/website
- **Production**: https://pentora-ai.github.io/website

## Optional: Environment Protection

To add approval requirements for production:

1. Go to **Settings** → **Environments**
2. Click **New environment** → Name: `production`
3. Add **Deployment protection rules**:
   - ✅ Required reviewers (select team members)
   - ✅ Wait timer (optional delay)
4. Click **Save protection rules**

Now production deployments will require manual approval.

## Optional: Custom Domain

If you want to use a custom domain (e.g., `docs.pentora.ai`):

### DNS Configuration

Add a CNAME record in your DNS provider:

```
CNAME  docs  pentora-ai.github.io.
```

### Update CNAME File

The `static/CNAME` file already exists. Update it:

```
docs.pentora.ai
```

### Configure in GitHub

1. Go to **Settings** → **Pages**
2. Under **Custom domain**:
   - Enter: `docs.pentora.ai`
   - Click **Save**
3. ✅ Enable **Enforce HTTPS** (after DNS propagates)

### Update Docusaurus Config

```js
const config = {
  url: 'https://docs.pentora.ai',
  baseUrl: '/',
  // ...
}
```

## Troubleshooting

### "Workflow permission error"

If you see permission errors:

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select: **Read and write permissions**
4. ✅ Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### "Pages build and deployment failed"

1. Check **Actions** tab for error logs
2. Verify `baseUrl` in `docusaurus.config.js` matches repo name
3. Ensure all dependencies are installed (`npm ci`)

### "Site shows 404"

1. Wait 2-3 minutes after deployment
2. Check URL matches: `https://<org>.github.io/<repo>/`
3. Verify GitHub Pages is enabled with source: `GitHub Actions`

## Next Steps

- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment workflows
- Set up environments for production protection
- Configure custom domain if needed
- Enable branch protection rules for `main`

## Support

If you encounter issues:

- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review workflow logs in Actions tab
- Verify all configuration files match the setup
