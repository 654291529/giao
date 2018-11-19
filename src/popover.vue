<template>
  <div class="popover" @click="handleClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'GearPopover',
    data () {
      return { visible: true }
    },
    methods: {
      // 定位内容
      positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      // 监听点击位置是否为内容区
      listenToDocument () {
        let eventHandler = (event) => {
          if (!this.$refs.contentWrapper.contains(event.target)) {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
        }
        document.addEventListener('click', eventHandler)
      },
      // 显示在页面
      onShow () {
        this.$nextTick(() => {
          this.positionContent()
          this.listenToDocument()
        })
      },
      handleClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          this.visible = !this.visible
          if (this.visible === true) {
            this.onShow()
          }
        }
      }
    },
    mounted () {
      console.log(this.$refs.contentWrapper)
      console.log(this.$refs.triggerWrapper)
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }
</style>