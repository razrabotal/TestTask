/* Third Party */
import Vue from 'vue'

import moment from 'moment'

/* App */
import App from './App'

Vue.config.productionTip = false

const app = new Vue({
  name: 'root',
  render: mount => mount(App)
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD MMMM YYYY')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  app.$mount('#app')
})
