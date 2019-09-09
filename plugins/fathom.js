import Vue from 'vue'

export default ({ app }) => {
    window.fathom = window.fathom || function () { (window.fathom.q = window.fathom.q || []).push(arguments) }
    const o = document.createElement('script')
    const m = document.getElementsByTagName('script')[0]
    o.async = 1
    o.src = 'https://fathom.kaisei-fes.com/tracker.js'
    o.id = 'fathom-script'
    m.parentNode.insertBefore(o, m)
    window.fathom('set', 'siteId', 'PYPVX')
    app.router.afterEach(() => {
        Vue.nextTick(() => window.fathom('trackPageview'))
    })
}