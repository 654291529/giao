<template>
  <div>
    <gear-nav :selected.sync="selected">
      <gear-nav-item name="home">首页</gear-nav-item>
      <gear-nav-sub name="about">
        <template slot="title">关于</template>
        <gear-nav-item name="team">团队</gear-nav-item>
        <gear-nav-item name="project">项目</gear-nav-item>
        <gear-nav-sub name="contacts">
          <template slot="title">联系</template>
          <gear-nav-item name="phone">手机</gear-nav-item>
          <gear-nav-item name="github">Github</gear-nav-item>
          <gear-nav-sub name="social">
            <template slot="title">社交</template>
            <gear-nav-item name="wechat">微信</gear-nav-item>
            <gear-nav-item name="weibo">微博</gear-nav-item>
          </gear-nav-sub>
        </gear-nav-sub>
      </gear-nav-sub>
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
      'gear-nav-sub': NavSub
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