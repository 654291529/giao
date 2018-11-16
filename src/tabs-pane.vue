<template>
  <div class="tabs-pane" :class="classes" v-if="active">
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
    // 计算属性监听 active 改变 class
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created () {
      // console.log('tabs 给 tabs-pane 的 eventBus')
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          this.active = true
        } else {
          this.active = false
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      background: #cccccc;
    }
  }
</style>