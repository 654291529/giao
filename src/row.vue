<template>
  <div class="row" :style="{ marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    mounted () {
      // 通过 mounted 传递 row 的 gutter 值给 col
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>

