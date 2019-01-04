<template>
  <div class="gear-nav-sub">
    <span @click="handleClick">
      <slot name="title"></slot>
    </span>
    <div class="gear-nav-sub-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GearNavSub',
    data () {
      return {
        open: false
      }
    },
    methods: {
      handleClick () {
        this.open = ! this.open
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gear-nav-sub {
    position: relative;
    > span {
      padding: 10px 20px;
      display: block;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid black;
      white-space: nowrap;
    }
  }
  .gear-nav-sub .gear-nav-sub .gear-nav-sub-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
</style>