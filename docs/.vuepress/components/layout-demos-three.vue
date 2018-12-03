<template>
  <div class="demo">
    <gear-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <gear-sider closeButton style="background:#ddd; width:200px; color: black;">sider</gear-sider>
      <gear-layout>
        <gear-header style="height: 50px; background:lightskyblue;">header</gear-header>
        <gear-content style="height: 200px; background:deepskyblue;">content</gear-content>
        <gear-footer style="height: 50px; background:lightskyblue;">footer</gear-footer>
      </gear-layout>
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