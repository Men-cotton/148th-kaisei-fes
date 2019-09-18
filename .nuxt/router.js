import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _54815524 = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _32e104ae = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _1b32573e = () => interopDefault(import('../pages/featureA1.vue' /* webpackChunkName: "pages/featureA1" */))
const _1b406ebf = () => interopDefault(import('../pages/featureA2.vue' /* webpackChunkName: "pages/featureA2" */))
const _1b4e8640 = () => interopDefault(import('../pages/featureA3.vue' /* webpackChunkName: "pages/featureA3" */))
const _3654d0b5 = () => interopDefault(import('../pages/foodmenu.vue' /* webpackChunkName: "pages/foodmenu" */))
const _75d2e3e4 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _4e73d994 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _05ee9c14 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _e01288d6 = () => interopDefault(import('../pages/onday.vue' /* webpackChunkName: "pages/onday" */))
const _457d7c40 = () => interopDefault(import('../pages/pre-index.vue' /* webpackChunkName: "pages/pre-index" */))
const _9ff8973a = () => interopDefault(import('../pages/realtime.vue' /* webpackChunkName: "pages/realtime" */))
const _407c27a9 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _22e01559 = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _1d216c8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _1fb457af = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _58c30aa2 = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _fb2b5e02 = () => interopDefault(import('../pages/featureA1.vue' /* webpackChunkName: "pages/featureA1" */))
const _fb0f2f00 = () => interopDefault(import('../pages/featureA2.vue' /* webpackChunkName: "pages/featureA2" */))
const _faf2fffe = () => interopDefault(import('../pages/featureA3.vue' /* webpackChunkName: "pages/featureA3" */))
const _a573ca58 = () => interopDefault(import('../pages/foodmenu.vue' /* webpackChunkName: "pages/foodmenu" */))
const _22191d36 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _79838937 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _63dd8ad6 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _4c288454 = () => interopDefault(import('../pages/onday.vue' /* webpackChunkName: "pages/onday" */))
const _44793ba1 = () => interopDefault(import('../pages/pre-index.vue' /* webpackChunkName: "pages/pre-index" */))
const _35276d88 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _ebcfe1cc = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _67166ecb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> e64e2d0575d67c7e6c6c81be9783ab9e1acf8ce9

Vue.use(Router)

export const routerOptions = {
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
      path: "/featureA3",
      component: _1b4e8640,
      name: "featureA3"
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
      path: "/map",
      component: _05ee9c14,
      name: "map"
    }, {
      path: "/onday",
<<<<<<< HEAD
      component: _e01288d6,
=======
      component: _4c288454,
>>>>>>> e64e2d0575d67c7e6c6c81be9783ab9e1acf8ce9
      name: "onday"
    }, {
      path: "/pre-index",
      component: _457d7c40,
      name: "pre"
    }, {
      path: "/realtime",
      component: _9ff8973a,
      name: "realtime"
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
}

export function createRouter() {
  return new Router(routerOptions)
}
