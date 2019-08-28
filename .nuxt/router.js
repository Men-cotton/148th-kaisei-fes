import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

<<<<<<< Updated upstream
<<<<<<<
const _54815524 = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _32e104ae = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _59fafef6 = () => interopDefault(import('../pages/header.vue' /* webpackChunkName: "pages/header" */))
const _14068b58 = () => interopDefault(import('../pages/hemenu.vue' /* webpackChunkName: "pages/hemenu" */))
const _75d2e3e4 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _4e73d994 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _407c27a9 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _22e01559 = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _1d216c8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _50ad5e38 = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _ab1ffa10 = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _75c5ad2e = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _50551180 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _234f381f = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _1aaeadba = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _cfe11558 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> Stashed changes


Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/booth",
<<<<<<< Updated upstream
      component: _1fb457af,
      name: "booth"
    }, {
      path: "/feature",
      component: _58c30aa2,
=======
      component: _50ad5e38,
      name: "booth"
    }, {
      path: "/feature",
      component: _ab1ffa10,
>>>>>>> Stashed changes
      name: "feature"
    }, {
      path: "/header",
      component: _59fafef6,
      name: "header"
    }, {
      path: "/hemenu",
      component: _14068b58,
      name: "hemenu"
    }, {
      path: "/information",
<<<<<<< Updated upstream
      component: _22191d36,
      name: "information"
    }, {
      path: "/lecture",
      component: _79838937,
      name: "lecture"
    }, {
      path: "/sandan",
      component: _35276d88,
      name: "sandan"
    }, {
      path: "/timetable",
      component: _ebcfe1cc,
      name: "timetable"
    }, {
      path: "/",
      component: _67166ecb,
=======
      component: _75c5ad2e,
      name: "information"
    }, {
      path: "/lecture",
      component: _50551180,
      name: "lecture"
    }, {
      path: "/sandan",
      component: _234f381f,
      name: "sandan"
    }, {
      path: "/timetable",
      component: _1aaeadba,
      name: "timetable"
    }, {
      path: "/",
      component: _cfe11558,
>>>>>>> Stashed changes
      name: "index"
    }],

    fallback: false
  })
}
