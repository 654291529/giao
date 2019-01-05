<template>
  <div class="gear-nav">
    {{namePath}}
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearNav',
    // 依赖
    provide() {
      return {
        root: this
      }
    },
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        items: [],
        namePath: []
      }
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      // 接收到注入传递过来的实例并 push 到 items 数组中
      addItem(vm) {
        this.items.push(vm)
      },
      updateChildren(){
        this.items.forEach(vm => {
          if (this.selected.indexOf(vm.name) >= 0) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        })
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('add:selected', (name) => {
            // multiple 属性 设置多选
            if (this.multiple) {
              // 遍历 不包含时更新
              if (this.selected.indexOf(name) < 0) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy.push(name)
                this.$emit('update:selected', copy)
              }
            } else {
              // 单选
              this.$emit('update:selected', [name])
            }
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style/var";
  .gear-nav {
    display: flex;
    border-bottom: 1px solid $nav-bottom-line;
    cursor: pointer;
  }
</style>