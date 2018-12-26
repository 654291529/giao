<template>
  <div>
    <gear-slides>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </gear-slides>
  </div>
</template>

<script>
  import Slides from './slides'

  export default {
    name: 'demo2',
    components: {
      'gear-slides': Slides
    },
    data(){
      return {

      }
    }
  }
</script>

<style >
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>