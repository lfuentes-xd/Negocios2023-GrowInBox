import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoComponent from '../components/Catalogo.vue'
import producto from "../components/producto.vue"
import UserView from "../views/UserView"
import ProductAdd from "../views/ProductAdd"

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
    path: '/Catalogo',
    name: 'Catalogo', 
    component: CatalogoComponent
  },
  {
    path: '/Producto',
    name: 'Producto', 
    component: producto
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
