const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes: ['/']
  })
]
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rho/' : '/',
  outputDir: 'docs',
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    }
  }
}
