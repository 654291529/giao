<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px' }">
    <div style="border: 1px solid green; height: 100px; background: lightblue;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GearCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        // 接收从 row 传递过来的 gutter
        gutter: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    /*background: lightblue;*/
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

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>