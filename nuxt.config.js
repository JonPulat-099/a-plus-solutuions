import webpack from 'webpack'
import I18N from './locales'

export default {
  head: {
    title: 'A+ Solutions',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/A+S.svg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  target: 'static',
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
      }),
    ],
  },
  modules: ['@nuxtjs/i18n'],

  i18n: I18N,
  /**
  buildDir: 'nuxt-dist',
   */
}
