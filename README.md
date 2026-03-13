# CertPrep Static Site

A lightweight Astro site that showcases every CertPrep certification domain, links to the open-source prep repositories, and highlights the hands-on demos that live inside each repo. The site is optimized for Cloudflare Pages and enforces tests locally and in CI before deployments run.

## Tech Stack

- [Astro](https://astro.build) for the static site
- TypeScript modules for study-track data
- [Vitest](https://vitest.dev) for data integrity tests
- [Husky](https://typicode.github.io/husky) git hooks to block commits when tests fail
- GitHub Actions workflow for Cloudflare Pages deployments

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:4321` by default.

## Tests

All commits must pass the Vitest suite (a Husky `pre-commit` hook enforces this).

```bash
npm test        # one-off
npm run test:watch
```

The tests verify that each track’s domain weights total 100%, every repo link resolves to the CertPrep org, and that each track exposes labs/scripts for the website to promote.

## Deployment

The workflow in `.github/workflows/deploy.yml` handles:

1. `npm ci`
2. `npm test`
3. `npm run build`
4. Upload to Cloudflare Pages via `cloudflare/pages-action`

Add the following GitHub Actions secrets before triggering the workflow:

- `CLOUDFLARE_API_TOKEN` — Pages write token scoped to the target account/project
- `CLOUDFLARE_ACCOUNT_ID`

Update `projectName` inside the workflow if you change the Pages project slug. The build output directory remains `dist/`, which is what the action publishes.

## Project Structure

```
├── public/                  # Static assets (logos, favicons)
├── src/
│   ├── components/          # Reusable UI blocks (track cards, domains)
│   ├── data/                # Track/domain metadata used for rendering + tests
│   ├── layouts/             # Site shell
│   ├── pages/               # Astro pages
│   └── styles/              # Global CSS
├── tests/                   # Vitest suites
└── .husky/                  # Git hooks (pre-commit triggers npm test)
```

## Contributing

1. Create a branch: `git checkout -b feat/add-track`.
2. Update the relevant data in `src/data/`.
3. Run `npm test && npm run lint`.
4. Commit (the pre-commit hook will re-run `npm test`).
5. Open a PR describing the update and referencing the source repo.
