module.exports = (api) => {
  api.configureWebpack(_ => {
    return {
      publicPath: '/',
      devServer: {
        port: 1779,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      },
    }
  })
}