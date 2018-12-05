<template>
  <div class="demo">
    <gear-button @click="$toast('点击弹出提示')">上方弹出</gear-button>
    <gear-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</gear-button>
    <gear-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</gear-button>

    <gear-button @click="showToast1">top</gear-button>
    <gear-button @click="showToast2">middle</gear-button>
    <gear-button @click="showToast3">bottom</gear-button>
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