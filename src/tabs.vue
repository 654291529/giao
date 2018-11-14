<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GearTabs',
    props: {
      seleted: {
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
    created() {
      // this.$emit('update:selected','xxx')
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>