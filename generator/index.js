module.exports = (api, _options = {}, rootOptions = {}) => {

	api.extendPackage({
		scripts: {
				"serve": "vue-cli-service serve",
				"build": "vue-cli-service build",
				"lint": "vue-cli-service lint"
		},
	});

    api.extendPackage({
      "dependencies": {
        "@micro-zoe/micro-app": "^0.8.5",
        "axios": "^0.21.1",
				"vue-router": "^3.5.2",
    		"vuex": "^3.6.2",
				"element-ui": "^2.15.5",
        "core-js": "^3.6.5",
        "GW-basics": "^0.1.0",
      },
			"devDependencies": {
        "vue-template-compiler": "^2.6.11",
				"@vue/cli-plugin-babel": "~4.5.0",
				"@vue/cli-plugin-eslint": "~4.5.0",
				"@vue/cli-service": "~4.5.0",
				"babel-eslint": "^10.1.0",
				"node-sass": "^4.12.0",
    		"sass-loader": "^7.0.1",
				"eslint": "^6.7.2",
				"eslint-plugin-vue": "^6.2.2"
			},
    })
    api.publishConfig({
      'registry': 'http://192.168.10.10:18081/repository/npm-group/'
    })
		api.render('./template')
  }