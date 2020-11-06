import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import SobreMi from '../views/SobreMi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: SobreMi
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import( '../views/Contacto.vue')
  },
  {
    path: '/UltimoPost',
    name: 'UltimoPost',
    component: () => import( '../views/UltimoPost.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import( '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
