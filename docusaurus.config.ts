import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pentora',
  tagline: 'Fast, Modular Security Scanner',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://pentora.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pentora-ai', // Usually your GitHub org/user name.
  projectName: 'pentora', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Docs is hosted separately at docs.pentora.ai
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/pentora-ai/website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Pentora',
      logo: {
        alt: 'Pentora Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/features',
          label: 'Features',
          position: 'left',
        },
        {
          to: '/pricing',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: '/enterprise',
          label: 'Enterprise',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },

        {
          href: 'https://docs.pentora.ai',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/download',
          label: 'Download',
          position: 'right',
          className: 'navbar-download-button',
        },
        {
          href: 'https://github.com/pentora-ai/pentora',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Features',
              to: '/features',
            },
            {
              label: 'Pricing',
              to: '/pricing',
            },
            {
              label: 'Enterprise',
              to: '/enterprise',
            },
            {
              label: 'Download',
              to: '/download',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              href: 'https://docs.pentora.ai',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Community',
              to: '/community',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pentora-ai/pentora',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Privacy',
              to: '/privacy',
            },
            {
              label: 'Terms',
              to: '/terms',
            },
            {
              label: 'License',
              href: 'https://github.com/pentora-ai/pentora/blob/main/LICENSE.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pentora · Apache-2.0 License`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
