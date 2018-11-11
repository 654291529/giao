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
import Toast from './toast'
import plugin from './plugin'

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
Vue.component('gear-toast', Toast)
Vue.use(plugin)


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

    // this.$toast('我是 message')
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
    },
    showToast(){
      this.$toast('当前功能不稳定，如果遇到 bug 请改变该功能')
    }
  }
});


