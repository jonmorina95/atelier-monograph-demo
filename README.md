# Atelier Monograph Demo

Responsive architecture portfolio demo built with Astro from the supplied Google Stitch design export.

## Stack

- Astro
- TypeScript
- Plain CSS
- Small vanilla-JS interaction layer
- Static output (no backend required)

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro.

## Production build

```bash
npm run build
npm run preview
```

## Content

Demo projects are defined in:

`src/data/projects.ts`

Images are in:

`public/images/projects/`

Optional downloadable project PDFs can be placed in:

`public/documents/`

and referenced from the project object.

## Design reference

- `design/DESIGN.md` — implementation design rules
- `design/screenshots/` — selected Stitch screenshots
- `design/stitch-export/` — original Stitch export

## GitHub Pages deployment

A workflow is included at `.github/workflows/deploy.yml`.

1. Create a GitHub repository, e.g. `architecture-studio-demo`.
2. Push this project to the repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main` (or manually run the workflow).

The workflow sets Astro's `BASE_PATH` to the repository name so links and assets work at a URL such as:

`https://YOUR_USERNAME.github.io/architecture-studio-demo/`

If this is deployed from a special `<username>.github.io` repository or moved to a custom domain, set `BASE_PATH=/` and set `SITE_URL` appropriately in the workflow.

## Before using as a real company website

- Replace placeholder company name and contact details.
- Replace demo imagery with licensed project photography.
- Replace placeholder project text and credits.
- Add real PDF documents where needed.
- Add proper SEO/social metadata and favicon/branding.
- Test on iOS Safari, Android Chrome, Firefox, and desktop Safari/Chrome.
