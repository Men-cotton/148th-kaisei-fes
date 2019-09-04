module.exports = {
    mode: 'universal',
    head: {
        htmlAttrs:{
        }
    },
    titleTemplate: '創立148周年記念開成祭',
    meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        name: '創立148周年記念開成祭',
        description: '2019年9月21日,22日に行われる、148th開成祭の公式ホームページです。',
        'og:type': 'website',
        'og:url': 'https://kaisei-fes.com',
        'og:title': '創立148周年記念開成祭',
        'og:description': '2019/9/21(土),22(日)開催　148th開成祭',
        'og:image': 'https://kaisei-fes.com/assets/icon.JPG',
        'Twitter:Card': 'Summary_large_image',
        theme_color: '#411445',
        background_color: '#411445',
        lang: 'ja',
    },
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
    plugins: [
        {
            src: '~/plugins/fathom.js',
        }
    ],
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
    '@nuxtjs/pwa',
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        transpile: ['vue-instantsearch', 'instantsearch.js/es'],
        extend(config, ctx) {
        }
    }
}
