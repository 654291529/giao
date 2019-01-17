<template>
  <div>
    <gear-pagination :total-page="1" :current-page.sync="currentPage" :hideSinglePage="false"></gear-pagination>
  </div>
</template>

<script>
  import Pagination from './pagination'
  export default {
    name: 'demo',
    components: {
      'gear-pagination': Pagination
    },
    data() {
      return {
        currentPage: 1
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "style/var";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>