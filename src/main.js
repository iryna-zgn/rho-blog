import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app')

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
/* eslint-enable */
