const PrerenderSpaPlugin = require('prerender-spa-plugin')

/* eslint-disable */
new PrerenderSpaPlugin(
  path.join(__dirname, '../docs'),
  [ '/' ]
)
/* eslint-enable */
