const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes: ['/'],
    renderer: new Renderer({
      renderAfterTime: 5000
    })
  })
]

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rho-blog/' : '/',
  outputDir: 'docs',
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    }
  }
}
