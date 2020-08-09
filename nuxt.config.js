
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/644c1e2c5a.js',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Define fonts here
  */
  webfontloader: {
    google: {
      families: ['Overlock:100,200,300,400,500,600,700,800', 'Nunito:100,200,300,400,500,600,700,800']
    }
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles.scss'
  ],
  /*
  ** Global Styles
  */
  styleResources: {
    scss: [
      '@/assets/styles/variables/_colors.scss',
      '@/assets/styles/variables/_responsive.scss',
      '@/assets/styles/variables/_fonts.scss',
      '@/assets/styles/variables/_typography.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
