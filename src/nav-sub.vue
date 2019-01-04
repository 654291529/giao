<template>
  <div class="gear-nav-sub">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="gear-nav-sub-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GearNavSub'
  }
</script>

<style lang="scss" scoped>
  .gear-nav-sub {
    position: relative;
    padding: 10px 20px;
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid black;
      white-space: nowrap;
    }
  }
</style>