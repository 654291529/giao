<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearTabsItem',
    inject: ['eventBus'],  // inject 注入
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
    created() {
      // console.log('tabs 给 tabs-item 的 eventBus')
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
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

  }
</style>