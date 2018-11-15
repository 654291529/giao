<template>
  <div class="tabs-item" @click="xxx">
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
    created () {
      // console.log('tabs 给 tabs-item 的 eventBus')
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          console.log(`nav ${this.name}被选中了`)
          this.active = true
        } else {
          console.log(`nav ${this.name}未被选中了`)
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
  }
</style>