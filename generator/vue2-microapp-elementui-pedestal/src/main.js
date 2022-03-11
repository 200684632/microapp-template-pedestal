import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import basic from 'gw-basics'
import { axios } from 'gw-basics'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/config'
import microApp from '@micro-zoe/micro-app'
import { loadStyle } from 'gw-basics/src/util'

//微前端启动
microApp.start()
//注册自定义组件包含登录菜单
Vue.use(basic)
Vue.use(Element);
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

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
