<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearTabsPane',
    inject: ['eventBus'],  // inject 注入
    data () {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true,
      }
    },
    created () {
      // console.log('tabs 给 tabs-pane 的 eventBus')
      this.eventBus.$on('update:selected', (name) => {
        if(name === this.name){
          console.log(`pane ${this.name}被选中了`)
          this.active = true
        } else {
          console.log(`pane ${this.name}未被选中了`)
          this.active = false
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane {

  }
</style>