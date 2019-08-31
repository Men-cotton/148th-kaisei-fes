module.exports = {
    mode: 'universal',
    head: {
        htmlAttrs:{
            prefix: 'og: '
        }
    },
    titleTemplate: '%s - 148th開成祭',
    meta: [
        {charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        { hid: 'description', name: 'description', content: '148th開成祭の公式ホームページです。'},
        { hid: 'og:site_name', property: 'og:site_name', content: '148th開成祭' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://kaisei-fes.com' },
        { hid: 'og:title', property: 'og:title', content: '148th開成祭' },
        { hid: 'og:description', property: 'og:description', content: '2019/9/21(土),22(日)開催。' },
        { hid: 'og:image', property: 'og:image', content: 'https://kaisei-fes.com/assets/icon.JPG' },
        { name: 'Twitter:Card', content: 'Summary_large_image' }

    ],
/*    link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
    ,*/
    icon: {
      iconSrc: 'assets/icon.JPG'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {background: '#411445'},
    /*
    ** Global CSS*/
    css: [],

    router:{
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js modules
    */
    routes: [
        'sandan',
        'timetable',
        'lecture',
        'feature',
        'information',
        'booth'
    ],

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
