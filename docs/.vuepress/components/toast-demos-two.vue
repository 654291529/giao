<template>
  <div class="demo">
    <gear-button @click="showToast1">上方弹出</gear-button>
    <gear-button @click="showToast2">中间弹出</gear-button>
    <gear-button @click="showToast3">下方弹出</gear-button>
  </div>
</template>

<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Toast from '../../../src/toast'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {
      'gear-button': Button,
      'gear-toast': Toast,
    },
    methods: {
      // toast1 设置方位为 top, 非自动关闭, 不支持 v-html, 含 closeButton (并可以设置关闭文案和相关回调),
      showToast1(){
        // toast API
        this.$toast('this is message top', {
          position: 'top',
          autoClose: false,
          closeButton: {
            text: 'Close',
            callback(){
              console.log('callback()回调，关闭被点击了')
            }
          },
          enableHtml: false,
        })
      },
      // toast2 设置方位为 middle, 自动关闭时间为 1s, 不支持 v-html, 无 closeButton,
      showToast2() {
        this.$toast('this is message middle', {
          position: 'middle',
          autoClose: 1,
          enableHtml: false,
          closeButton: false
        })
      },
      // toast3 设置方位为 bottom, 其他为默认设置
      showToast3() {
        this.$toast('this is message bottom', {
          position: 'bottom'
        })
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demo {
    margin: 20px 0;
  }
</style>