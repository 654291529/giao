<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <gear-cascader-items :items="source" class="popover" :height="popoverHeight"></gear-cascader-items>
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
      },
      popoverHeight: {
        type: String
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
    font-size: $font-size;
    position: relative;
    .trigger {
      height: 32px;
      width: 100px;
      border: 1px solid black;
    }
    .popover-wrapper {
      position: absolute; top: 100%; left: 0; background: white; height: 200px; display: flex;
      @extend .box-shadow;
      .label {
        white-space: nowrap;
      }
    }

  }
</style>