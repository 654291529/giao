<template>
  <div class="tabs-nav">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearTabsNav',
    inject: ['eventBus'],  // inject 注入
    created() {
      // 爷给父的 eventBus
      // console.log('tabs 给 tabs-nav 的 eventBus')
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-nav {

  }
</style>