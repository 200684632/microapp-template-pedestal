import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axios } from 'GW-basics'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/config'

Vue.use(Element);
//注册全局axios 请求
window.myAxios = axios(store)
Vue.config.productionTip = false
Vue.config.devtools = false

//microapp添加事件箭筒控制页面跳转
function dataListener(data) {
  setTimeout(() => {
    router.push({ name: data.routerName });
  }, 0)
}

window.microApp?.addDataListener(dataListener, true)

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
