module.exports = (api, _options = {}, rootOptions = {}) => {

  let dependencies = {
    "axios": "^0.21.1",
    "vue-router": "^3.5.2",
    "vuex": "^3.6.2",
    "core-js": "^3.6.5"
  }

  let devDependencies = {
    "vue-template-compiler": "^2.6.11",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "gw-basics": 'http://192.168.10.10:18081/repository/npm-group/gw-basics/-/gw-basics-0.1.2.tgz',
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^7.0.1",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2"
  }
  if(_options.project_type == 'microapp+vue2+elementui基座' || _options.project_type == 'microapp+vue2+elementui子应用') {
    dependencies['@form-create/element-ui'] = "^2.5.17"
    dependencies['@micro-zoe/micro-app'] = "^0.8.5"
    dependencies['element-ui'] = "^2.15.5"
  }
  if(_options.project_type == 'vue2+vant') {
    dependencies['vant'] = '^2.12.45'
  }

  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    "dependencies": dependencies,
    "devDependencies": devDependencies
  })

  
  if(_options.project_type == 'microapp+vue2+elementui基座') {
    api.render('./vue2-microapp-elementui-pedestal')
  }
  if(_options.project_type == 'microapp+vue2+elementui子应用') {
    api.render('./vue2-microapp-elementui-children')
  }

  if(_options.project_type == 'vue2+vant') {
    api.render('./vue2-vant')
  }
}