import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// IMPORTANT: set this to your real domain before launch.
// The canonical URL and sitemap are generated from it — search engines need it correct.
const SITE = 'https://zambia-dev-wiki.pages.dev'

export default defineConfig({
  site: SITE,
  // Trailing-slash consistency avoids duplicate-content splits in search indexes.
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Zambia Dev Wiki',
      description:
        'A community-maintained reference for building software in Zambia: payment gateways, mobile money, hosting, rates and regulation.',
      tagline: 'Answers to the questions Zambian developers keep asking.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Zambia Dev Wiki',
      },
      favicon: '/favicon.svg',
      components: {
        // Custom hero and footer components.
        Hero: './src/components/Hero.astro',
        Footer: './src/components/Footer.astro',
      },
      social: {
        github: 'https://github.com/senorMk/zambian-dev-wiki',
      },
      // Every page gets an "Edit this page" link — the single biggest driver of drive-by contributions.
      editLink: {
        baseUrl: 'https://github.com/senorMk/zambian-dev-wiki/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'index,follow,max-image-preview:large' },
        },
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What this wiki is', link: '/' },
            { label: 'How to contribute', link: '/contributing/' },
            { label: 'How we verify claims', link: '/verification/' },
          ],
        },
        {
          label: 'Payments',
          items: [
            { label: 'Choosing a payment gateway', link: '/payments/' },
            { label: 'Provider comparison', link: '/payments/comparison/' },
            { label: 'Accepting card payments', link: '/payments/card-payments/' },
            { label: 'Does Stripe work in Zambia?', link: '/payments/stripe/' },
            { label: 'Receiving money from abroad', link: '/payments/receiving-international-payments/' },
            { label: 'PayPal in Zambia', link: '/payments/paypal/' },
          ],
        },
        {
          label: 'Providers',
          autogenerate: { directory: 'providers' },
        },
        // No guides exist yet — restore this group when src/content/docs/guides/ has content.
        // {
        //   label: 'Guides',
        //   autogenerate: { directory: 'guides' },
        // },
      ],
    }),
  ],
})
