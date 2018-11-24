import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'
import progressive from 'progressive-image/dist/vue'

Vue.use(VueTouch)
Vue.use(progressive, {
  removePreview: true
})

VueTouch.config.swipe = {
  direction: 'horizontal'
}

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
/* eslint-enable */
