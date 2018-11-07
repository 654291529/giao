import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('gear-button', Button)
Vue.component('gear-icon', Icon)
Vue.component('gear-button-group', ButtonGroup)
Vue.component('gear-input', Input)
Vue.component('gear-row', Row)
Vue.component('gear-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: '双向数据绑定'
  },
  created() {
    setTimeout(()=> {
      let event = new Event('change')
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
    },3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
});


