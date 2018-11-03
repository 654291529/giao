<template>
  <svg class="gear-icon">
    <use v-bind:xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style lang="scss">
  .gear-icon { width: 1em; height: 1em; }
</style>