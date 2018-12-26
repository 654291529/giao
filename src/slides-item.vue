<template>
  <transition name="slide">
    <div class="gear-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default  {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: undefined
      }
    },
    computed: {
      visible() {
        return this.selected === this.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gear-slides-item {

  }
  .slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter {
    transform: translateX(100%);
    position: absolute;
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
</style>