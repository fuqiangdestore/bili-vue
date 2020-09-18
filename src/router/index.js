import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Login = ()=>import('@/views/Login.vue')
const Userinfo = ()=>import('@/views/Userinfo.vue')


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userinfo',
      component: Userinfo
    }
  ]


  const router = new VueRouter({
    routes,
    mode: 'history'
  })

// router.beforeEach((to, from, next) => {
  // if (!localStorage.getItem('token') || !localStorage.getItem('id') && to.meta.istoken == true) {
  //   router.push('/login')
  //   Vue.prototype.$msg.fail('请重新登录')
  //   return
  // }
  // next()

// })

export default router
