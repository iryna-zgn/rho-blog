const PrerenderSpaPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin(
        path.join(__dirname, 'docs'),
        [ '/' ]
      )
    ]
  }
}
