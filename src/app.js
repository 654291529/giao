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
import Tabs from './tabs'
import TabsNav from './tabs-nav'
import TabsItem from './tabs-item'
import TabsContent from './tabs-content'
import TabsPane from './tabs-pane'
import Popover from './popover'

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
Vue.component('gear-tabs', Tabs)
Vue.component('gear-tabs-nav', TabsNav)
Vue.component('gear-tabs-item', TabsItem)
Vue.component('gear-tabs-content', TabsContent)
Vue.component('gear-tabs-pane', TabsPane)
Vue.component('gear-popover', Popover)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: '双向数据绑定',
    message2: '',
    error: '',

    selectedTab: 'sports',
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
    showToast1(){
      // toast API
      this.$toast('this is message top', {
        position: 'top',
        autoClose: false,
        closeButton: {
          text: '关闭',
          callback(){
            console.log('callback()回调，关闭被点击了')
          }
        },
        enableHtml: false,
      })
    },
    // toast 没有 closeButton
    showToast2() {
      this.$toast('this is message middle', {
        position: 'middle',
        autoClose: 1000,
        enableHtml: false,
        closeButton: false
      })
    },
    showToast3() {
      this.$toast('this is message bottom', {
        position: 'bottom',
        autoClose: 3,
        enableHtml: false,
      })
    }
  }
});


