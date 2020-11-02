import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import './assets/index.less' 
import 'vue-json-pretty/lib/styles.css' 
import VueJsonPretty from 'vue-json-pretty'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('VueJsonPretty', VueJsonPretty)
console.log(122)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
