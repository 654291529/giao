<template>
  <button class="gear-button" :class="{[`icon-${iconPosition}`]: true}">
    <gear-icon class="icon" v-if="icon" :name="icon"></gear-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        // 属性检测器 validator
        validator(value) {
          return value !== 'left' && value !== 'right' ? false : true;
        }
      }
    }
  }

</script>

<style lang="scss">
  .gear-button {
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;

    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .icon { order: 1; margin-right: .2em; }
    > .content { order: 2; }

    &.icon-right {
      > .icon { order: 2; margin-right: 0; margin-left: .2em; }
      > .content { order: 1; }
    }
  }
</style>