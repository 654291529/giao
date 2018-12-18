<template>
  <div class="cascaderItems" :style="{ height: height }">
    <!--<div>selected: {{ selected && selected[level] && selected[level].name }}</div>-->
    <!--<div>level: {{ level }}</div>-->
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="index" @click="handleClickLabel(item)">
        {{item.name}}
        <gear-icon class="icon" v-if="item.children" name="right"></gear-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gear-cascader-items :items="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onUpdateSelected"></gear-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'GearCascaderItems',
    components: {
      'gear-icon': Icon
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      // 定义选中属性
      selected: {
        type: Array,
        default: () => {
          return []
        }
      },
      // 定义层级属性
      level: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems () {
        let currentSelected = this.selected[this.level]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },
    mounted (){

    },
    methods: {
      handleClickLabel (item) {
        // this.selected[this.level] = item  Vue不允许在已经创建实例上动态添加新的根级响应式属性
        // 使用 $set 方法添加到嵌套对象上 Vue.set(object, key , value)
        // this.$set(this.selected, this.level , item)

        // 由于违背了单向数据流, 因此此处修改之前子组件会修改父组件值的方案
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)  // 每次选中 Label 更新 right 节点
        this.$emit('update:selected', copy)
      },
      // 拿到递归子组件的新值 向父组件传递
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  .cascaderItems {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    .left {
      height: 100%;
      padding: .3em 0;
      overflow: auto;
    }
    .right {
      margin-top: -1px;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      display: flex;
      align-items: center;
    }
    .icon {
      margin-left: 0.5em;
      transform: scale(0.8);
    }
  }
</style>