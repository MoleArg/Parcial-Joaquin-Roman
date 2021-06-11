import Vue from 'vue'
import VueRouter from 'vue-router'
import Productos from '../components/Productos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: () => import("../components/ProductoDetalle.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
