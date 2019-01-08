<template>
  <div class="gear-nav-item" :class="{ selected, vertical }" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearNavItem',
    // 注入
    inject: ['root', 'vertical'],
    props: {
      name: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        selected: false
      }
    },
    created() {
      // 将 实例 告知外部根节点
      this.root.addItem(this)
    },
    methods: {
      handleClick() {
        this.root.namePath = []
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style/var";
  .gear-nav-item {
    position: relative;
    padding: 10px 20px;
    &:not(.vertical) {
      &.selected {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom: 2px solid $theme-color;
          width: 100%;
        }
      }
    }
    &.vertical {  transition: all .3s;
      &.selected {
        color: $theme-color;
        background: $nav-selected-bg;
        transition: all .3s;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  // 第一层级再往下 不采用一级样式
  .gear-nav-sub .gear-nav-item:not(.vertical) {
    &.selected {
      background: $nav-bottom-line;
      &::after {
        display: none;
      }
    }
  }
</style>