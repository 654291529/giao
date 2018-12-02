<template>
  <div>
    <gear-button>默认按钮</gear-button>
    <gear-button icon="setting">图标按钮</gear-button>
    <gear-button :loading="true">加载按钮</gear-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'gear-button': Button
    }
  }
</script>

<style scoped>

</style>