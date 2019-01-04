<template>
  <div class="gear-nav-item" :class="{ selected }" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearNavItem',
    // 注入
    inject: ['root'],
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
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gear-nav-item {
    padding: 10px 20px;
    &.selected {
      background: pink;
    }
  }
</style>