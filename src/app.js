import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('gear-button', Button)
Vue.component('gear-icon', Icon)
Vue.component('gear-button-group', ButtonGroup)
Vue.component('gear-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
});


