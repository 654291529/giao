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

      }
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