module.exports = (api) => {
  api.configureWebpack(webpackConfig => {
    webpackConfig.publicPath = '/'
    webpackConfig.devServer = {
      port: 1779,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  })
}