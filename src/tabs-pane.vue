<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearTabsPane',
    inject: ['eventBus'],  // inject 注入
    created() {
      // console.log('tabs 给 tabs-pane 的 eventBus')
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane {

  }
</style>