# Portfolio V2

React (Vite) portfolio built from the Deepak Portfolio V2 Master Build System.

## Requirements

- Node.js 20.19+ or 22.12+

## Scripts

| Command                | What it does                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `npm run dev`          | Start the dev server                                                                                          |
| `npm run build`        | Production build to `dist/` (also runs `postbuild`, which generates `dist/404.html` for GitHub Pages routing) |
| `npm run preview`      | Serve the production build locally                                                                            |
| `npm run lint`         | Run ESLint                                                                                                    |
| `npm run lint:fix`     | Run ESLint with auto-fix                                                                                      |
| `npm run format`       | Format all files with Prettier                                                                                |
| `npm run format:check` | Check formatting without writing                                                                              |

## Structure

```text
public/      profile.jpg, favicon.ico, resume.pdf, manifest/SEO files
src/
  assets/  components/  sections/  pages/
  data/    hooks/       layouts/    styles/
  App.jsx  main.jsx
scripts/     generate-404.js (GitHub Pages SPA routing)
.github/
  workflows/ deploy.yml (builds and deploys to GitHub Pages)
```

`@` resolves to `src/` (for example `import Home from '@/pages/Home.jsx'`).

## Contact form (EmailJS)

The contact form sends through [EmailJS](https://www.emailjs.com/). Copy `.env.example` to
`.env`, fill in your service ID, template ID and public key, and restart `npm run dev`. Your
EmailJS template should expect the variables `from_name`, `from_email`, `subject`, `message`.

Without these set, the form still validates and submits, but shows an inline "email sending
isn't configured yet" message instead of actually sending.

## Deployment

Deployed to GitHub Pages at `https://deepakkv8335.github.io`, via the GitHub Actions workflow
in `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` on every push to
`main`. See the deployment checklist provided alongside this project for the one-time repo
setup steps (enabling Pages, adding EmailJS secrets).
