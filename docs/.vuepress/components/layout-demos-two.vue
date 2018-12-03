<template>
  <div class="demo">
    <gear-layout style="color: white; margin-bottom:50px;">
      <gear-header style="height: 50px; background:lightskyblue;">header</gear-header>
      <gear-layout>
        <gear-sider closeButton style="height: 200px; background:#ddd; width:200px; color: black;">sider</gear-sider>
        <gear-content style="height: 200px; background:deepskyblue;">content</gear-content>
      </gear-layout>
      <gear-footer style="height: 50px; background:lightskyblue;">footer</gear-footer>
    </gear-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Sider from '../../../src/sider'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'
  export default {
    components: {
      'gear-layout': Layout,
      'gear-header': Header,
      'gear-sider': Sider,
      'gear-content': Content,
      'gear-footer': Footer,
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
</style>