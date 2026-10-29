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
