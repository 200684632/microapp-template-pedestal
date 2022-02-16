module.exports = (api, _options = {}, rootOptions = {}) => {

	console.log('------', _options, rootOptions)
	api.extendPackage({
		scripts: {
				"serve": "vue-cli-service serve",
				"build": "vue-cli-service build",
				"lint": "vue-cli-service lint"
		},
	});

    api.extendPackage({
      "dependencies": {
        "@micro-zoe/micro-app": "^0.2.2",
        "axios": "^0.21.1",
				"vue-router": "^3.5.2",
    		"vuex": "^3.6.2",
				"element-ui": "^2.15.5",
      },
			"devDependencies": {
				"@vue/cli-plugin-babel": "~4.5.0",
				"@vue/cli-plugin-eslint": "~4.5.0",
				"@vue/cli-service": "~4.5.0",
				"babel-eslint": "^10.1.0",
				"eslint": "^6.7.2",
				"eslint-plugin-vue": "^6.2.2",
				"vue-template-compiler": "^2.6.11"
			},
    })

		api.render('./template')
  }