import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoComponent from '../components/Catalogo.vue'
import Producto from "../components/Producto.vue"
import UserView from "../views/UserView"
import ProductAdd from "../views/ProductAdd"
import UserAdd from "../views/Useradd"
import OrdenesCompra from "../components/OrdenesCompra.vue"
import reviewForm from "../components/reviewForm.vue"
import LoginComponent from "../components/LoginComponent.vue"
import LoginAdmin from "../components/LoginAdmin.vue"
import SignUp from "../components/SignUp.vue"
import WishlistComponent from "../components/WishlistComponent.vue"
import CartComponent from "../components/CartComponent.vue"

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
  },

  {
    path: '/UserAdd',
    name: 'UserAdd',
    component: UserAdd
  },
  {
    path: '/reviewForm',
    name: 'reviewForm',
    component: reviewForm
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/LoginAdmin',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Wishlist',
    name: 'Wishlist',
    component: WishlistComponent
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: CartComponent
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
