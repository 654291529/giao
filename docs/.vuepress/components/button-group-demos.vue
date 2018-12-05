<template>
  <div>
    <gear-button-group>
      <gear-button icon="left">上一页</gear-button>
      <gear-button>更多</gear-button>
      <gear-button icon="right" icon-position="right">下一页</gear-button>
    </gear-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    components: {
      'gear-button': Button,
      'gear-button-group': ButtonGroup
    }
  }
</script>

<style scoped>

</style>