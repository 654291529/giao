import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('gear-button', Button)
Vue.component('gear-icon', Icon)
Vue.component('gear-button-group', ButtonGroup)
Vue.component('gear-input', Input)
Vue.component('gear-row', Row)
Vue.component('gear-col', Col)
Vue.component('gear-layout', Layout)
Vue.component('gear-header', Header)
Vue.component('gear-sider', Sider)
Vue.component('gear-content', Content)
Vue.component('gear-footer', Footer)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: '双向数据绑定',
    message2: '',
    error: ''
  },
  created() {
    // setTimeout(()=> {
    //   let event = new Event('change')
    //   let inputElement = this.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    // },3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    inputValueChange(){
      if(this.message2.length > 5){
        this.error = '不能超过5个字符！'
      } else {
        this.error = ''
      }
    }
  }
});


