import Vue from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'

microApp.start()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
