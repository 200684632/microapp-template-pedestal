import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config'
import { axios } from 'gw-basics'
import { loadStyle } from 'gw-basics/src/util'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
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
