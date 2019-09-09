import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _1fb457af = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _58c30aa2 = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _a573ca58 = () => interopDefault(import('../pages/foodmenu.vue' /* webpackChunkName: "pages/foodmenu" */))
const _22191d36 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _79838937 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _63dd8ad6 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _44793ba1 = () => interopDefault(import('../pages/pre-index.vue' /* webpackChunkName: "pages/pre-index" */))
const _35276d88 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _ebcfe1cc = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _67166ecb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _54815524 = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _32e104ae = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _1b32573e = () => interopDefault(import('../pages/featureA1.vue' /* webpackChunkName: "pages/featureA1" */))
const _1b406ebf = () => interopDefault(import('../pages/featureA2.vue' /* webpackChunkName: "pages/featureA2" */))
const _1b4e8640 = () => interopDefault(import('../pages/featureA3.vue' /* webpackChunkName: "pages/featureA3" */))
const _3654d0b5 = () => interopDefault(import('../pages/foodmenu.vue' /* webpackChunkName: "pages/foodmenu" */))
const _75d2e3e4 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _4e73d994 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _457d7c40 = () => interopDefault(import('../pages/pre-index.vue' /* webpackChunkName: "pages/pre-index" */))
const _407c27a9 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _22e01559 = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _1d216c8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> d6c1ed0574daef991e679a55fa0312caf07549a5

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/booth",
      component: _1fb457af,
      name: "booth"
    }, {
      path: "/feature",
      component: _58c30aa2,
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
      component: _a573ca58,
      name: "foodmenu"
    }, {
      path: "/information",
      component: _22191d36,
      name: "information"
    }, {
      path: "/lecture",
      component: _79838937,
      name: "lecture"
    }, {
      path: "/map",
      component: _63dd8ad6,
      name: "map"
    }, {
      path: "/pre-index",
      component: _44793ba1,
      name: "pre"
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
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
