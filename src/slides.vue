<template>
  <div class="gear-slides">
    <div class="gear-sildes-window" ref="window">
      <div class="gear-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selected: {
        type: String,
      }
    },
    mounted() {
      this.updateChildren()
    },
    updated () {
      this.updateChildren()
    },
    methods: {
      updateChildren () {
        let first = this.$children[0]
        let selected = this.selected || first.name
        this.$children.forEach((vm) => {
          vm.selected = selected
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gear-slides {
    display: inline-block;
    &-window {

    }
    &-wrapper {
      position: relative;
    }
  }
</style>