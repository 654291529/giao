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
      console.log(this.$children)
      this.items.forEach(vm => {
        console.log(vm.name)
        if(this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    computed: {
      items() {
        return this.$children.filter(vm => vm.$options.name === 'GearNavItem')
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