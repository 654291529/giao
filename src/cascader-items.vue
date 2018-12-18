<template>
  <div class="cascaderItems" :style="{ height: height }">
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <gear-icon class="icon" v-if="item.children" name="right"></gear-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gear-cascader-items :items="rightItems" :height="height"></gear-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'GearCascaderItems',
    components: {
      'gear-icon': Icon
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems() {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";
  .cascaderItems {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    .left {
      height: 100%;
      padding: .3em 0;
    }
    .right {
      margin-top: -1px;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      display: flex;
      align-items: center;
    }
    .icon {
      margin-left: 0.5em;
      transform: scale(0.8);
    }
  }
</style>