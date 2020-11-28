import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Login = ()=>import('@/views/Login.vue')
const Userinfo = ()=>import('@/views/Userinfo.vue')
const register = ()=>import('../views/register.vue')
const Article = ()=>import('../views/Article.vue')
const Edit = ()=>import('../views/Edit.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Order = ()=>import('../views/order/Order.vue')

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Home,
      meta: {
        keepalive: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userinfo',
      component: Userinfo
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/order',
      component: Order
    }
  ]
  

  const router = new VueRouter({
    routes,
    mode: 'history'
  })


export default router
