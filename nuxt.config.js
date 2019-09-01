module.exports = {
    mode: 'universal',
    head: {
        htmlAttrs:{
            prefix: 'og: '
        }
    },
    titleTemplate: '%s - 148th開成祭',
    meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        name: '148th開成祭',
        description: '148th開成祭の公式ホームページです。',
        'og:type': 'website',
        'og:url': 'https://kaisei-fes.com',
        'og:title': '148th開成祭',
        'og:description': '2019/9/21(土),22(日)開催。',
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
    '@nuxtjs/pwa',
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
