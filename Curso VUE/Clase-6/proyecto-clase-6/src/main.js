import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('formatProduct',function (producto){
  return producto.split('_').map(palabra=>palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
})

new Vue({
  render: h => h(App),
}).$mount('#app')
