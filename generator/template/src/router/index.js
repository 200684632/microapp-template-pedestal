import Vue from 'vue';
import VueRouter from 'vue-router';
import {routers} from 'GW-basics'
import Layout from '@/pages/layout'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
	...routers({
		layout: Layout
	}),
  {
    path: '/login',
    name: 'login',
		component: () =>
          import( /* webpackChunkName: "views" */ '@/pages/login/index'),
  },
	{
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: '概览',
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
  mode: 'history'
})

router.beforeEach(async (to, from, next) => {
  if(store.getters.token.length > 0) {
    await store.dispatch('GetUserInfo')
    next()
  }else {
    next('/login')
  }
})

export default router;