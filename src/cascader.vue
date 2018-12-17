<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <gear-cascader-items :items="source"></gear-cascader-items>
    </div>
  </div>
</template>

<script>
  import CascaderItems from './cascader-items'
  export default {
    name: "GearCascader",
    components: { 'gear-cascader-items': CascaderItems },
    props: {
      source: {
        type: Array
      }
    },
    data () {
      return {
        popoverVisible: false,
        level1Selected: null,
        level2Selected: null,
      }
    },
    // 计算属性 用来更新 下层级 items
    computed: {
      level2Items() {
        if(this.level1Selected) {
          return this.level1Selected.children
        } else {
          return []
        }
      },
      level3Items() {
        if(this.level2Selected) {
          return this.level2Selected.children
        } else {
          return []
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover {
      border: 1px solid green;
      height: 200px;
      display: flex;
      .label {
        white-space: nowrap;
      }
    }

  }
</style>