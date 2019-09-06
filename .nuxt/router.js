import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _54815524 = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _32e104ae = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _1b32573e = () => interopDefault(import('../pages/featureA1.vue' /* webpackChunkName: "pages/featureA1" */))
const _1b406ebf = () => interopDefault(import('../pages/featureA2.vue' /* webpackChunkName: "pages/featureA2" */))
const _3654d0b5 = () => interopDefault(import('../pages/foodmenu.vue' /* webpackChunkName: "pages/foodmenu" */))
const _75d2e3e4 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _4e73d994 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _457d7c40 = () => interopDefault(import('../pages/pre-index.vue' /* webpackChunkName: "pages/pre-index" */))
const _407c27a9 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _22e01559 = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _1d216c8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _54815524,
      name: "booth"
    }, {
      path: "/feature",
      component: _32e104ae,
      name: "feature"
    }, {
      path: "/featureA1",
      component: _1b32573e,
      name: "featureA1"
    }, {
      path: "/featureA2",
      component: _1b406ebf,
      name: "featureA2"
    }, {
      path: "/foodmenu",
      component: _3654d0b5,
      name: "foodmenu"
    }, {
      path: "/information",
      component: _75d2e3e4,
      name: "information"
    }, {
      path: "/lecture",
      component: _4e73d994,
      name: "lecture"
    }, {
      path: "/pre-index",
      component: _457d7c40,
      name: "pre"
    }, {
      path: "/sandan",
      component: _407c27a9,
      name: "sandan"
    }, {
      path: "/timetable",
      component: _22e01559,
      name: "timetable"
    }, {
      path: "/",
      component: _1d216c8a,
      name: "index"
    }],

    fallback: false
  })
}
