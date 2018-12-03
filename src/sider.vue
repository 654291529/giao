<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button v-if="closeButton" @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'GearSider',
    props: {
      closeButton: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        visible: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  // sider 动画
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>