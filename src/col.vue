<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearCol',
    props: {
      span: {
        type: [Number, String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    background: lightblue;
    width: 50%;
    border: 1px solid grey;

    // 声明 class 前缀
    $class-prefix: col-;
    // 循环计算
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>