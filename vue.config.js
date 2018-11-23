// const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rho-blog/' : '/',
  outputDir: 'docs'
  // configureWebpack: {
  //   plugins: [
  //     new PrerenderSpaPlugin(
  //       path.join(__dirname, 'docs'),
  //       [ '/' ]
  //     )
  //   ]
  // }
}
