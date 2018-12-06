<template>
  <div>
    <gear-popover trigger="hover">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>悬浮</gear-button>
    </gear-popover>

    <gear-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>悬浮</gear-button>
    </gear-popover>

    <gear-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>悬浮</gear-button>
    </gear-popover>

    <gear-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>悬浮</gear-button>
    </gear-popover>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import Popover from '../../../src/popover'
  export default {
    components: {
      'gear-button': Button,
      'gear-popover': Popover
    },
  }
</script>

<style scoped>

</style>