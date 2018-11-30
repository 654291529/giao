<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "GearCollapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: String,
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
    mounted () {
      this.eventBus.$emit('update:selected', this.selected)
      // 通知外部
      this.eventBus.$on('update:selected', (name) => {
        this.$emit('update:selected', name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  $grey: grey;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>