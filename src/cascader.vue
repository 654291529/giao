<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <gear-cascader-items :items="source" class="popover" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></gear-cascader-items>
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
      },
      selected: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
        popoverVisible: false,
      }
    },
    methods: {
      // 拿到子组件的新值 再向外层父组件传递
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
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