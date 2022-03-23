import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/pages/layout'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
		component: () =>
          import( /* webpackChunkName: "views" */ '@/pages/login/index'),
    meta: {
      isAuth: false,
      title: '登录'
    }
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          menu: false,
          remark: '',
          code: '/wel/index',
          $keepAlive: true,
          title: '首页'
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/Home'),
      }
    ]
  },
]
const router = new VueRouter({
  routes,
})

router.beforeEach(async (to, from, next) => {
  window.document.title = to.meta.title
  if(store.getters.token) {
    if(store.state.basic.loaded == false) {
      await store.dispatch('GetUserInfo')
    }
    next()
  }else {
    if(to.meta.isAuth === false) {
      next()
    }else {
      next('/login')
    }
  }
})

export default router;
