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
  window.document.title = to.meta.title
  if(store.state.basic.loaded == false) {
    await store.dispatch('GetUserInfo')
  }
  next()
})

export default router;
