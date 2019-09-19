import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54815524 = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _ca21f0d6 = () => interopDefault(import('../pages/cafe.vue' /* webpackChunkName: "pages/cafe" */))
const _32e104ae = () => interopDefault(import('../pages/feature.vue' /* webpackChunkName: "pages/feature" */))
const _1b32573e = () => interopDefault(import('../pages/featureA1.vue' /* webpackChunkName: "pages/featureA1" */))
const _1b406ebf = () => interopDefault(import('../pages/featureA2.vue' /* webpackChunkName: "pages/featureA2" */))
const _1b4e8640 = () => interopDefault(import('../pages/featureA3.vue' /* webpackChunkName: "pages/featureA3" */))
const _1b5c9dc1 = () => interopDefault(import('../pages/featureA4.vue' /* webpackChunkName: "pages/featureA4" */))
const _1b6ab542 = () => interopDefault(import('../pages/featureA5.vue' /* webpackChunkName: "pages/featureA5" */))
const _3654d0b5 = () => interopDefault(import('../pages/foodmenu.vue' /* webpackChunkName: "pages/foodmenu" */))
const _75d2e3e4 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _4e73d994 = () => interopDefault(import('../pages/lecture.vue' /* webpackChunkName: "pages/lecture" */))
const _05ee9c14 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _457d7c40 = () => interopDefault(import('../pages/pre-index.vue' /* webpackChunkName: "pages/pre-index" */))
const _9ff8973a = () => interopDefault(import('../pages/realtime.vue' /* webpackChunkName: "pages/realtime" */))
const _407c27a9 = () => interopDefault(import('../pages/sandan.vue' /* webpackChunkName: "pages/sandan" */))
const _22e01559 = () => interopDefault(import('../pages/timetable.vue' /* webpackChunkName: "pages/timetable" */))
const _45a3d90e = () => interopDefault(import('../pages/today.vue' /* webpackChunkName: "pages/today" */))
const _1d216c8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      path: "/cafe",
      component: _ca21f0d6,
      name: "cafe"
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
      path: "/featureA4",
      component: _1b5c9dc1,
      name: "featureA4"
    }, {
      path: "/featureA5",
      component: _1b6ab542,
      name: "featureA5"
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
      path: "/today",
      component: _45a3d90e,
      name: "today"
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
