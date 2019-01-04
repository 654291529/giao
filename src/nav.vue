<template>
  <div class="gear-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearNav',
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
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    computed: {
      items() {
        return this.$children.filter(vm => vm.$options.name === 'GearNavItem')
      }
    },
    methods: {
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
  .gear-nav {
    display: flex;
    border: 1px solid red;
  }
</style>