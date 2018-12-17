<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <div>{{item.name}}</div>
        <hr>
        <div v-for="item2 in item.children">
          <div>{{item2.name}}</div>
          <hr>
          <div v-for="item3 in item2.children">
            <div>{{item3.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GearCascader",
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {

  }
</style>