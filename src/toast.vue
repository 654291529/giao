<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.prototype.$toast = function(){
    console.log('我是 toast')
  }
  export default {
    name: 'GearToast',
    props: {
      // 自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      // 自动关闭延时
      autoCloseDelay: {
        type: Number,
        default: 3
      },
      closeButton: {
        type: Object,
        // default 值为一个对象时 必须用函数
        default: () => {
          return {
            text: '关闭', callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false,
      }
    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    methods: {
      // updateStyles 方法修正了 关闭左边 line 高度的显示问题
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
        })
      },
      execAutoClose () {
        if(this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close () {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  .toast {
    font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center;
    color: white;
    background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
    padding: 0 16px;
    .message {
      padding: 8px 0;
    }

    .close {
      padding-left: 16px;
      cursor: pointer;
      flex-shrink: 0;
    }

    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }


</style>