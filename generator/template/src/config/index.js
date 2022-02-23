import Vue from 'vue'

let baseUrl = ''
const env = process.env
if (env.NODE_ENV === 'development') {
  baseUrl = `http://192.168.10.20:8001`; // 开发环境地址pm_db_test
} else if (env.NODE_ENV === 'production') {
  baseUrl = `http://192.168.10.20:8001`; //生产环境地址
} else if (env.NODE_ENV === 'test') {
  baseUrl = ``; //测试环境地址
}

//注册全局配置，必须
Vue.prototype.$publicConfig = {
  size: 'mini',
  buttonSize: 'mini',
  inputSize: 'mini',
  baseUrl: baseUrl,
  fileUrl: baseUrl + '/files'
}