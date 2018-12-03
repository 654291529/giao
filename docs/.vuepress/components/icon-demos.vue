<template>
  <div>
    <gear-icon class="icon" name="warn"></gear-icon>
    <gear-icon class="icon" name="error"></gear-icon>
    <gear-icon class="icon" name="loading"></gear-icon>
    <gear-icon class="icon" name="setting"></gear-icon>
    <gear-icon class="icon" name="left"></gear-icon>
    <gear-icon class="icon" name="right"></gear-icon>
    <gear-icon class="icon" name="down"></gear-icon>
    <gear-icon class="icon" name="like"></gear-icon>
  </div>
</template>

<script>
  import Icon from '../../../src/icon'
  export default {
    components: {
      'gear-icon': Icon
    }
  }
</script>

<style scoped>

</style>