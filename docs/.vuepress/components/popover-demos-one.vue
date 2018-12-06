<template>
  <div>
    <gear-popover>
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>点击</gear-button>
    </gear-popover>

    <gear-popover position="bottom">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>点击</gear-button>
    </gear-popover>

    <gear-popover position="left">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>点击</gear-button>
    </gear-popover>

    <gear-popover position="right">
      <template slot="content">
        <div>popover 内容</div>
      </template>
      <gear-button>点击</gear-button>
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