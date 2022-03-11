import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axios } from 'gw-basics'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/config'
import basic from 'gw-basics'
import { loadStyle } from 'gw-basics/src/util'

Vue.use(Element);
Vue.use(basic)
//注册全局axios 请求
window.myAxios = axios(store)
Vue.config.productionTip = false
Vue.config.devtools = false
// 动态加载阿里云字体库
//可加载多个
const iconfontVersion = ['1970983_0f82e1mdczco']
iconfontVersion.forEach(ele => {
  loadStyle('//at.alicdn.com/t/font_$key.css'.replace('$key', ele));
});

//microapp添加事件箭筒控制页面跳转
function dataListener(data) {
  if(!store.state.basic.loaded) {
    store.commit('SET_TOKEN', data.token)
  }
  setTimeout(() => {
    router.push({ name: data.routerName });
  }, 0)
}

if(window.microApp) {
  window.microApp.addDataListener(dataListener, true)
}else {
  store.commit('SET_TOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE2NDY3OTQ1NDksInVzZXJfaWQiOjEsImV4cCI6MTY0NzE0MDE0OSwiaWF0IjoxNjQ2NzA4MTQ5fQ.9M_sfNgQPfKKOo3AbEK8g4vy5VBB8Qpi8A9ZKTQKk_w')
}

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
