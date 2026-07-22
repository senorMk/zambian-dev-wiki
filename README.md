# Zambia Dev Wiki

A community-maintained reference for building software in Zambia — payment gateways, mobile money,
card acceptance, hosting, rates and regulation.

Anyone can contribute. Every page has an "Edit this page" link that opens a pull request.

## Why

The same questions get asked in Zambian developer communities every few weeks, get answered from
memory, and scroll away. "Which payment gateway should I use?" comes up over and over — and the
answers rot: a provider that worked in 2024 is down in 2025, and a fee quoted once gets repeated for
two years after it changed.

This wiki writes those answers down once, in public, with dates on them.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

Built with [Astro Starlight](https://starlight.astro.build/). Content is plain Markdown in
`src/content/docs/` — you do not need to know Astro to contribute.

## Before you launch this publicly

- [x] Set the real domain in `astro.config.mjs` (`SITE`) — currently the free `zambian-dev-wiki.pages.dev`
- [x] Replace the org placeholder in `astro.config.mjs` (social link and edit link)
- [ ] Set up hosting (see below)
- [ ] Buy a custom domain and update `SITE` — do this before attracting inbound links, or you pay for it in SEO
- [ ] Submit the sitemap to Google Search Console
- [ ] Review community contributions — most start as `hearsay` and need verification

## Deploying

Any static host works. Cloudflare Pages and Netlify both build this with
`npm run build`, publish directory `dist`.

For GitHub Pages, add `.github/workflows/deploy.yml` using the official
`withastro/action`, and set `base` in `astro.config.mjs` if you are not serving from a custom domain.

**Use a custom domain.** A `*.github.io` subdomain will rank far worse than an owned domain, and you
cannot move the URLs later without losing whatever authority you have built.

## How content is graded

Every factual page carries a verification stamp in its frontmatter:

```yaml
verified:
  date: 2026-07-19
  by: github-handle
  level: primary   # primary | reported | hearsay
volatile: true     # fees, availability, uptime — rots fast
```

- `primary` — confirmed against the provider's own docs, pricing, contract or written support reply
- `reported` — a named contributor's own first-hand experience, with a date
- `hearsay` — repeated in community discussion, nobody re-checked

**Community contributions start as `hearsay`.** Upgrading them is the most valuable contribution.
See `src/content/docs/verification.md` for the full policy, including the categories
(licensing, tax, contract terms, security) that may not be published unsourced.

## Licence

Content: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — free to reuse with
attribution, share-alike.
Site code: MIT.
