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
    path: '/portada',
    redirect: '/'
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: SobreMi,
    alias: '/acerca'
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import( '../views/Contacto.vue'),
    alias: '/contactame'
  },
  {
    path: '/UltimoPost/:entrada',
    name: 'UltimoPost',
    component: () => import( '../views/UltimoPost.vue')
  },
  {
    path: '/administrador/:entrada',
    name: 'Administrador',
    component: () => import('../views/Administrador.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import( '../views/NotFound.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
