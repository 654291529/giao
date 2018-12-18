<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || '&nbsp;' }}
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
    },
    // 计算属性添加选中结果
    computed: {
      result () {
        return this.selected.map((item) => item.name).join('/')
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
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
      border: 1px solid $border-color;
      border-radius: $border-radius;
    }
    .popover-wrapper {
      position: absolute; top: 100%; left: 0; background: white; height: 200px; display: flex;
      margin-top: 8px;
      @extend .box-shadow;
      .label {
        white-space: nowrap;
      }
    }

  }
</style>