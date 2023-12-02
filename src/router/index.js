import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoComponent from '../components/Catalogo.vue'
import Producto from "../components/Producto.vue"
import UserView from "../views/UserView"
import ProductAdd from "../views/ProductAdd"
import OrdenesCompra from "../components/OrdenesCompra.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/OrdenesCompra',
    name: 'OrdenesCompra',
    component: OrdenesCompra
  },
  {
    path: '/Catalogo',
    name: 'Catalogo', 
    component: CatalogoComponent
  },
  {
    path: '/Producto/:id',
    name: 'Producto', 
    component: Producto
  },
  {
    path: '/User', 
    name: 'User', 
    component: UserView
  }, 
  {
    path: '/Productadd', 
    name: 'ProductAdd',
    component: ProductAdd
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
