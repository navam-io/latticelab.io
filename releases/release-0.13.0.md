# Release 0.13.0

**Release Date**: November 28, 2025

---

## Feature Slice 13: GitHub Actions Deployment

**Spec Reference**: `website-spec.md` → Build & Deploy

**Summary**: Configured GitHub Actions workflow for automatic deployment to GitHub Pages. Enables continuous deployment on push to main branch with type checking and build validation.

### Completed Acceptance Criteria

- [x] `.github/workflows/deploy.yml` created per spec
- [x] Workflow triggers on push to main and manual dispatch
- [x] Build step: `npm ci && npm run build`
- [x] Deploy to GitHub Pages using `actions/deploy-pages`
- [x] Astro configured for static output (`output: 'static'`)
- [x] Site URL configured for GitHub Pages (`https://www.latticelab.io`)

### Technical Details

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - Checkout repository
      - Setup Node.js 22 with npm cache
      - Install dependencies (npm ci)
      - Build Astro site (includes type checking)
      - Upload Pages artifact

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - Deploy to GitHub Pages
```

**Workflow Features**:

1. **Triggers**:
   - Automatic deployment on push to `main` branch
   - Manual deployment via workflow_dispatch

2. **Security**:
   - Minimal required permissions
   - ID token for GitHub Pages deployment

3. **Concurrency**:
   - Single deployment at a time
   - No cancellation of in-progress deployments

4. **Build Process**:
   - Node.js 22 with npm caching
   - Clean install with `npm ci`
   - Type checking before build
   - Static site generation with Astro

5. **Deployment**:
   - GitHub Pages environment
   - Automatic URL output
   - Artifact-based deployment

**Astro Configuration** (already configured):

```javascript
export default defineConfig({
  site: 'https://www.latticelab.io',
  output: 'static',
  // ...
});
```

### Tests Added

16 new Playwright tests covering:

**GitHub Actions Workflow (5 tests)**:
- deploy.yml workflow file exists
- deploy.yml contains required triggers (push to main, workflow_dispatch)
- deploy.yml has correct permissions (contents, pages, id-token)
- deploy.yml has build job with correct steps
- deploy.yml has deploy job with correct configuration

**Astro Configuration (2 tests)**:
- astro.config.mjs has static output
- astro.config.mjs has site URL configured

**Package.json Scripts (2 tests)**:
- build script exists
- typecheck script exists for CI

**Build Output (2 tests)**:
- build produces dist directory
- build produces index.html

**Production Build Validation (5 tests)**:
- typecheck passes
- site is accessible at localhost during dev
- all main pages build without errors
- static assets are accessible
- no console errors on page load

**Total Tests:** 590

### Files Created/Modified

**Created:**
- `.github/workflows/deploy.yml`
- `releases/release-0.12.0.md`
- `releases/release-0.13.0.md`
- `tests/feature-13-deployment.spec.ts`

**Modified:**
- `package.json` — Version bump to 0.13.0

### Deployment Instructions

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain: `www.latticelab.io` (if applicable)

2. **Push to Main**:
   - Any push to `main` branch triggers automatic deployment
   - View workflow status in Actions tab

3. **Manual Deployment**:
   - Go to Actions → Deploy to GitHub Pages
   - Click "Run workflow" → "Run workflow"

### Breaking Changes

None — existing functionality preserved.

---

*Phase 1 Foundation complete! All MVP features implemented. Next: Phase 2 - Content & Journeys*
