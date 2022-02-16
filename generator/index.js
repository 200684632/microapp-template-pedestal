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
      }
    })

		api.render('./template')
  }