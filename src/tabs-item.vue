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
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $theme-color: #70b0f4;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $theme-color;
    }
  }
</style>