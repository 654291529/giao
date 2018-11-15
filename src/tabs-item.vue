<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearTabsItem',
    inject: ['eventBus'],  // inject 注入
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
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
      // console.log('tabs 给 tabs-item 的 eventBus')
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          this.active = true
        } else {
          this.active = false
        }
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    &.active {
      background: #cccccc;
    }
  }
</style>