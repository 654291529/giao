<template>
  <div>
    <gear-nav :selected.sync="selected">
      <gear-nav-item name="home">首页</gear-nav-item>
      <gear-nav-item name="about">关于</gear-nav-item>
      <gear-nav-item name="me">我的</gear-nav-item>
    </gear-nav>
  </div>
</template>

<script>
  import Nav from './nav'
  import NavItem from './nav-item'
  import NavSub from './nav-sub'

  export default {
    name: 'demo',
    components: {
      'gear-nav': Nav,
      'gear-nav-item': NavItem,
      'gear-sub-nav': NavSub
    },
    data() {
      return {
        selected: [ 'home' ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "style/var";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>