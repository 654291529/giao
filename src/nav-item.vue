<template>
  <div class="gear-nav-item" :class="{ selected }" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearNavItem',
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