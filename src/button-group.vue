<template>
  <div class="gear-button-group">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .gear-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .gear-button {
      border-radius: 0;
      margin-left: -1px;
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      /* 解决 margin-left: -1px ，border-left 被前一按钮 border-right 覆盖的问题 */
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }

</style>