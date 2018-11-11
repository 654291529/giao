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
    // toast 有 closeButton
    showToast(){
      // toast API
      this.$toast('this is methis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagethis is messagessagethis is messagethis is messagethis is messagethis is messagethis is messagethis is message', {
        closeButton: {
          text: '关闭',
          callback(){
            console.log('callback()回调，关闭被点击了')
          }
        }
      })
    },
    // toast 没有 closeButton
    showToastNoClose() {
      this.$toast('<strong>message</strong>',{ enableHtml: false })
    }
  }
});


