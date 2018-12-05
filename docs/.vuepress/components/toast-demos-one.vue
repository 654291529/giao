<template>
  <div class="demo">
    <gear-button @click="$toast('点击弹出提示', {autoClose: 1})">上方弹出</gear-button>
    <gear-button @click="$toast('点击弹出提示', {position: 'middle'})">中间弹出</gear-button>
    <gear-button @click="$toast('点击弹出提示', {position: 'bottom', closeButton: false})">下方弹出</gear-button>
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