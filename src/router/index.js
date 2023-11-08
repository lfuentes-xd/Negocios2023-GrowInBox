import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoComponent from '../components/Catalogo.vue'
import LoginComponent from '../components/Login.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
