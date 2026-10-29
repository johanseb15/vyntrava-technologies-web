# ADEL-WEB-007 — Release candidate for GitHub Pages

**Status:** Prepared, NOT published. Preserve `main`; promotion requires founder approval.

## Source and candidate
- Source: `develop/adel-web-001`
- Hosted path (proposed): `https://johanseb15.github.io/vyntrava-technologies-web/`
- Build target: `DEPLOY_TARGET=github-pages` adds `basePath` for the repository subpath.
- Default localhost build has no subpath; no breaking change to existing E2E tests.
- Indexing remains **disabled** in candidate builds. Turning it on needs explicit release decision and verification of domain, legal notices, metadata and sitemap/robots policy.
- CI: `.github/workflows/adel-web-007-ci.yml` runs on development pushes, builds both variants, validates generated static files and uploads an artifact. **No deploy step.**

## Exit gates
- [ ] GitHub Actions CI run shows PASS with downloadable release artifact.
- [ ] Validate candidate under subpath in a real static server, not Next dev.
- [ ] Confirm Pages hosting settings and access to Actions deployments.
- [ ] Validate public HTTPS URL, static assets, navigation, privacy route and 404 behavior.
- [ ] Run axe/WCAG + Lighthouse on production artifact; document any open findings.
- [ ] Verify images' rights and origins; remove dependency on remote assets when feasible.
- [ ] Finalize public contact email and verify a message is received.
- [ ] Privacy policy matches actual hosting, external domains, retention and practices.
- [ ] Founder accepts desktop/mobile screenshots and permits production promotion.
- [ ] Explicitly enable indexing only if launch is public and search-ready.

## Release rules
Do not merge into `main`, enable a deployment workflow, point a custom domain or turn on indexing as part of the candidate CI. Do not claim a published site until it is opened and verified over HTTPS. Use a SHA-tagged artifact for rollback.

## Controlled publishing (prepared on development branch)
- Workflow: `.github/workflows/adel-web-007-publish.yml`.
- Dispatch is **manual only** and runs **only** if invoked against `main` with exact confirmation `PUBLICAR`.
- GitHub Actions `workflow_dispatch` requires the workflow to exist on the default branch before it is selectable.
- The deployment workflow itself runs both browsers, tests, typecheck, Pages build, export assertions and HTTP smoke checks.
- Configure **Settings → Pages → Build and deployment → Source = GitHub Actions**.
- Configure **Settings → Environments → github-pages → Required reviewers** if available for the repository plan; check deployment branch restrictions. Without environment reviewers, the explicit manual dispatch plus confirmation is the approval mechanism.
- After final CEO/founder review of the approved commit, merge the verified candidate into `main` through a reviewed PR. This is a **separate authorized action**, not part of the preparation phase.
- Open Actions → `ADEL WEB 007 - Publish to GitHub Pages` → Run workflow, choose `main`, type `PUBLICAR`.
- The build uses `NEXT_PUBLIC_ENABLE_INDEXING=false`: **publicly accessible** still means **noindex**. Only enable indexing in a later, explicitly approved SEO release.
- Pages domain is expected to be `https://johanseb15.github.io/vyntrava-technologies-web/` in repository subpath mode. A custom domain requires changing basePath and renewed QA.
- Deployment cannot prove mail actually arrives; run a real outbound/inbound contact test after publication.
- Do not treat an unreviewed privacy notice, unverified external photo licensing or an unexecuted WCAG/Lighthouse audit as passed.
