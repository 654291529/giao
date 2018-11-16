<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GearTabsNav',
    inject: ['eventBus'],  // inject 注入
    mounted() {
      this.eventBus.$on('update:selected',(item, vm) => {
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        console.log(width, height, top, left)
        this.$refs.line.style.width = `${width}px`
      })
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $theme-color: #70b0f4;
  .tabs-nav {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $theme-color;
      width: 100px;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>