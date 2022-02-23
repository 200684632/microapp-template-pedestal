import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from 'GW-basics'
import Layout from '@/pages/layout'

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
  base: window.__MICRO_APP_BASE_ROUTE__ || '/'
})

export default router;