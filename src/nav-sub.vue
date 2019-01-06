<template>
  <div class="gear-nav-sub" :class="{ active }" v-click-outside="close">
    <span class="gear-nav-sub-label" @click="handleClick">
      <slot name="title"></slot>
      <span class="gear-nav-sub-icon">
        <gear-icon v-if="open" name="left"></gear-icon>
        <gear-icon v-else name="right"></gear-icon>
      </span>
    </span>
    <div class="gear-nav-sub-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ClickOutside from './plugins/click-outside'
  import Icon from './base/icon/icon'
  // import Springs from './action/springs/springs'
  export default {
    name: 'GearNavSub',
    components: {
      'gear-icon': Icon,
    },
    inject: ['root'],
    directives: { ClickOutside },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    // components: {
    //   'gear-springs': Springs
    // },
    data() {
      return {
        open: false,
      }
    },
    computed: {
      active: {
        get: function () {
          return this.root.namePath.indexOf(this.name) >= 0 ? true : false
        },
        set: function () {
        }
      }
    },
    methods: {
      handleClick() {
        this.open = !this.open
      },
      close() {
        this.open = false
      },
      updateNamePath() {
        this.active = true
        this.root.namePath.unshift(this.name)
        if(this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style/var";

  .gear-nav-sub {
    position: relative;
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $theme-color;
        width: 100%;
      }
    }
    &-label {
      padding: 10px 20px;
      display: block;
    }
    &-icon {
      display: none;
    }
    &-popover {
      font-size: $font-size;
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 1px;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, .8);
      border-radius: $border-radius;
      min-width: 8em;
    }
  }

  // 第二层级再往下 不采用一级样式
  .gear-nav-sub .gear-nav-sub {
    .gear-nav-sub-popover {
      top: 0;
      left: 100%;
      margin-left: 6px;
    }
    .gear-nav-sub-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .gear-nav-sub-icon {
      display: inline-flex;
      vertical-align: middle;
      margin-left: 1em;
      svg { fill: #999 }
    }
  }

</style>