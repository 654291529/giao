<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'GearTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'Horizontal',
        validator (value) {
          return ['Horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    created () {
      // this.$emit('update:selected','xxx')
    },
    mounted () {
      // 找到 item
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GearTabsNav') {
          vm.$children.forEach((item) => {
            if (item.$options.name === 'GearTabsItem' && item.name === this.selected) {
              console.log(item.$el)
              this.eventBus.$emit('update:selected', this.selected, item)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>