<template>
  <div class="gear-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearButtonGroup',
    mounted(){
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`gear-button-group 内部的子元素应该全是 gear-button，但是您所写的结构中包含了 ${name}，这样做会导致布局和样式的错误，请核对代码并修改。`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gear-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .gear-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      /* 解决 margin-left: -1px ，border-left 被前一按钮 border-right 覆盖的问题 */
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }

</style>