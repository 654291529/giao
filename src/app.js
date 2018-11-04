import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('gear-button', Button)
Vue.component('gear-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
});