<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GearCollapseItem",
    props: {
      title: {
        // 必传且是字符串
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false,
        single: false
      }
    },
    inject: ['eventBus'],
    mounted () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          if (name !== this.name) {
            if (this.single) {
              this.close()
            }
          } else {
            this.show()
          }
        })
      }
    },
    methods: {
      toggle () {
        if (this.open) {
          this.open = false
        } else {
          this.eventBus && this.eventBus.$emit('update:selected', this.name)
        }
      },
      close () {
        this.open = false
      },
      show () {
        this.open = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $grey: grey;
  $border-radius: 4px;
  .collapseItem {
    > .title {
      border: 1px solid $grey;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        margin-bottom: -1px;
      }
    }
    > .content {
      padding: 8px;
    }
  }
</style>