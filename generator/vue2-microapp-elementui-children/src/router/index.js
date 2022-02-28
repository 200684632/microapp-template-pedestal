import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from 'gw-basics'
import Layout from '@/pages/layout'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  ...routers({
    layout: Layout
  }),
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          menu: false,
          remark: '',
          code: '/wel/index',
          $keepAlive: true,
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/home/index'),
      }
    ]
  },
]
const router = new VueRouter({
  routes,
  base: window.__MICRO_APP_BASE_ROUTE__ || '/'
})

router.beforeEach(async (to, from, next) => {
  if(store.state.basic.loaded == false) {
    await store.dispatch('GetUserInfo')
  }
  next()
})

export default router;
