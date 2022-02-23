import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import basic from 'GW-basics'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/config'
import microApp from '@micro-zoe/micro-app'

//微前端启动
microApp.start()
//注册自定义组件包含登录菜单
Vue.use(basic)
Vue.use(Element);
//注册全局axios 请求
window.myAxios = basic.getAxios(store)
Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
