# GitHub Pages Deployment Guide

## Configuration Status ✅

Your project is correctly configured for GitHub Pages:

- **Base Path**: `/JaysJoints/` (matches repository name)
- **Deploy Script**: `npm run deploy` (uses gh-pages)
- **Build Output**: `dist/` folder
- **Branch**: `gh-pages` (configured in GitHub Pages settings)

## Deployment Steps

### Automatic Deployment (Recommended)

1. **Make sure all changes are committed:**
   ```bash
   git add -A
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project (`npm run build`)
   - Deploy the `dist/` folder to the `gh-pages` branch
   - Push to GitHub automatically

3. **Wait for GitHub Pages to update** (usually 1-2 minutes)

### Manual Deployment (If automatic fails)

If you encounter network issues, you can deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Switch to gh-pages branch:**
   ```bash
   git checkout gh-pages
   ```

3. **Copy dist contents to root:**
   ```bash
   # On Windows PowerShell:
   Copy-Item -Path dist\* -Destination . -Recurse -Force
   ```

4. **Commit and push:**
   ```bash
   git add -A
   git commit -m "Deploy latest version"
   git push origin gh-pages
   ```

5. **Switch back to main:**
   ```bash
   git checkout main
   ```

## Troubleshooting

### Site Not Loading

1. **Check the URL**: Make sure you're visiting `https://afykirby1.github.io/JaysJoints/` (note the trailing slash)

2. **Clear Browser Cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

3. **Check GitHub Pages Settings**:
   - Go to: Repository → Settings → Pages
   - Source should be: `Deploy from a branch`
   - Branch should be: `gh-pages` → `/ (root)`

4. **Verify Base Path**: The `base` in `vite.config.js` must match your repository name exactly (case-sensitive)

### Network Errors During Deployment

If you see "Could not resolve host: github.com":
- Check your internet connection
- Try again in a few minutes
- Use manual deployment method above

### 404 Errors on Direct URL Access

The `public/404.html` file handles SPA routing. If you still see 404s:
- Make sure `404.html` is in the `public/` folder
- Rebuild and redeploy

## Current Status

- ✅ Vite config: Base path set to `/JaysJoints/`
- ✅ Deploy script: Configured in package.json
- ✅ 404.html: Created for SPA routing support
- ✅ Build: Successful (tested)

## Next Steps

1. **Retry deployment** when network is available:
   ```bash
   npm run deploy
   ```

2. **Verify deployment** by visiting:
   https://afykirby1.github.io/JaysJoints/

3. **Check GitHub Actions** (if enabled) for deployment status

