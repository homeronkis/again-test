import Vue from 'vue'
import App from './App.vue'
import underscore from 'vue-underscore';
import router from './router'

Vue.config.productionTip = false

Vue.use(underscore);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
