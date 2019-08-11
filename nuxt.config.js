
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  /*
  metaInfo: {
    title: '148th開成祭',
    titleTemplate: (data) => {
      return data ? `${data} - 148th開成祭` : '148th開成祭';
    }
    meta: [

    ]
  }
  head: {


  },
*/
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        content: '148th開成祭'
      },

      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  ,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#411445' },
  /*
  ** Global CSS*/
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}