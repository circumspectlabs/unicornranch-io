import * as iconset from './shared/iconset'

const indexable = () => process.env.NUXT_SITE_INDEXABLE?.toLowerCase() == 'true'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/i18n',
    'nuxt-anchorscroll',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-seo-utils',
    'v-satori/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  site: {
    indexable: indexable()
  },

  compatibilityDate: '2025-06-01',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/robots.txt'
      ].concat(iconset.icons.map(item => `/icons/${item.name}`)),
      crawlLinks: true
    }
  },

  vite: {
    plugins: [
      {
        apply: 'build',
        name: 'vite-plugin-ignore-sourcemap-tailwind-warnings',
        configResolved(config) {
          const originalOnWarn = config.build.rollupOptions.onwarn
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (warning.code === 'SOURCEMAP_BROKEN' && warning.plugin === '@tailwindcss/vite:generate:build') {
              return
            }

            if (originalOnWarn) {
              originalOnWarn(
                warning, warn
              )
            } else {
              warn(
                warning
              )
            }
          }
        }
      }
    ]
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    compilation: {
      escapeHtml: false,
      strictMessage: false
    },
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json', isCatchallLocale: true },
      { code: 'de', iso: 'de-DE', name: 'German', file: 'de.json' }
    ]
  },

  robots: {
    allow: indexable() ? '*' : undefined,
    robotsTxt: true
  }
})
