import en from 'vuetify/es5/locale/en'
import id from 'vuetify/es5/locale/id'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  mode: 'spa',

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate(title) {
      if (title) {
        return `${title} - Satu Padu`
      }
      return 'Satu Padu'
    }
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',

    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',

    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',

    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',

    // https://nuxt-community.github.io/nuxt-i18n/
    [
      'nuxt-i18n',
      {
        vueI18n: {
          silentTranslationWarn: true
        },
        defaultLocale: 'id',
        vueI18nLoader: true,
        lazy: true,
        detectBrowserLanguage: false,
        langDir: 'lang/',
        locales: [
          {
            code: 'id',
            iso: 'id-ID',
            name: 'Indonesia',
            file: 'id/index.js'
          },
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en/index.js'
          }
        ]
      }
    ]

    // https://github.com/nuxt-community/sentry-module
    // "@nuxtjs/sentry",

    // https://github.com/nuxt-community/analytics-module
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#eb2227',
          secondary: '#c32126'
        }
      }
    },
    lang: {
      locales: { id, en },
      current: 'id'
    }
  },

  loading: {
    color: '#eb2227',
    height: '3px',
    failedColor: '#931a1d'
  },

  meta: {
    name: 'Satu Padu',
    description:
      'Satu Padu adalah sebuah inisiatif gerakan untuk mengakselerasi inovasi dan kontribusi dalam menciptakan perubahan dengan semangat gotong royong',
    theme_color: '#fff',
    ogHost: 'satupadu.org',
    twitterCard: 'summary_large_image'
    // twitterSite: '@rebloodnow',
    // twitterCreator: '@leonikasari'
  },

  manifest: {
    name: 'Satu Padu',
    short_name: 'Satu Padu',
    start_url: '/?utm_source=homescreen',
    description:
      'Satu Padu adalah sebuah inisiatif gerakan untuk mengakselerasi inovasi dan kontribusi dalam menciptakan perubahan dengan semangat gotong royong',
    lang: 'id',
    theme_color: '#fff',
    background_color: '#fff'
  },

  // https://nuxtjs.org/api/configuration-plugins
  plugins: ['~plugins/components'],

  // https://nuxtjs.org/api/configuration-css
  css: ['~assets/styles/app'],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
