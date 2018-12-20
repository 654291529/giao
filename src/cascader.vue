<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">
      {{ result || '&nbsp;' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <gear-cascader-items :items="source" class="popover" :loadData="loadData"
                           :height="popoverHeight" :selected="selected"
                           @update:selected="onUpdateSelected"
      ></gear-cascader-items>
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
      },
      loadData: {
        type: Function
      }
    },
    data () {
      return {
        popoverVisible: false,
      }
    },
    methods: {
      onClickDocument (e) {
        let { cascader } = this.$refs
        let { target } = e
        if (cascader === target || cascader.contains(target)) {
          return
        }
        this.close()
      },
      open() {
        this.popoverVisible = true
        this.$nextTick(() => {
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.popoverVisible = false
        console.log('close')
        document.removeEventListener('click', this.onClickDocument)
      },
      toggle() {
        if(this.popoverVisible === true) {
          this.close()
        } else {
          this.open()
        }
      },
      // 拿到子组件的新值 再向外层父组件传递
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]
        let simplest = (children,id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren,id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) {
              return found
            } else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }
        let updateSource = (result) => {
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy, lastItem.id)
          toUpdate.children = result
          this.$emit('update:source', copy)
        }
        // 不是叶子节点才加载数据
        if(!lastItem.isLeaf) {
          this.loadData && this.loadData(lastItem, updateSource)
        }
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
    display: inline-block;
    font-size: $font-size;
    position: relative;
    border: 1px solid red;
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