<template>
  <div>
    <gear-collapse :selected.sync="selected" single>
      <gear-collapse-item title="标题1" name="1">内容1</gear-collapse-item>
      <gear-collapse-item title="标题2" name="2">内容2</gear-collapse-item>
      <gear-collapse-item title="标题3" name="3">内容3</gear-collapse-item>
    </gear-collapse>
    <div style="padding: 20px 0;">选中（开启）的标题：
      <div class="selected">{{selected}}</div>
    </div>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    components: {
      'gear-collapse': Collapse,
      'gear-collapse-item': CollapseItem,
    },
    data() {
      return {
        selected: [],   // 数组中的数字为默认开启的标题
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .selected {
    display: inline-flex;
    color: #7b532b;
    font-weight: bold;
  }
</style>