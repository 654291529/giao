<template>
  <div class="gear-pagination">
    <span class="gear-pagination-nav prev" :class="{ disabled: currentPage === 1}"
          @click="onClickPage(currentPage - 1)">
      <gear-icon class="icon" name="left"></gear-icon>
    </span>
    <span v-for="page in pages" class="gear-pagination-item"
          :class="{ active : page === currentPage, separator: page === '...' }"
          @click="onClickPage(page)">
      {{page}}
    </span>
    <span class="gear-pagination-nav next" :class="{ disabled: currentPage === totalPage }"
          @click="onClickPage(currentPage + 1)">
      <gear-icon class="icon" name="right"></gear-icon>
    </span>
  </div>
</template>

<script>
  import Icon from '../src/base/icon/icon'
  export default {
    name: 'GearPagination',
    components: {
      'gear-icon': Icon
    },
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideSinglePage: {
        type: Boolean,
        default: true
      },
    },
    computed: {
      // 依赖 totalPage 和 currentPage
      pages () {
        return unique([1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
        .filter((n) => n >= 1 && n <= this.totalPage)
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current)
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
          return prev
        }, [])
        return pages
      }
    },
    methods: {
      onClickPage(page) {
        if(page === '...') {
          console.log('不是page')
        } else {
          if(page >=1 && page <= this.totalPage) {
            console.log(page)
            this.$emit('update:currentPage',page)
          }
        }
      }
    }
  }

  // 去重函数
  function unique (array) {
    // Set 方法去重 但兼容不好
    // return [...new Set(array)]

    // 前提是已知是数字的去重方法
    const object = {}
    array.map((number) => {
      object[number] = true
    })
    return Object.keys(object).map((s) => parseInt(s, 10))
  }
</script>

<style lang="scss" scoped>
  @import "./style/var";
  .gear-pagination {
    &-item {
      border: 1px solid $pagination-item-border;
      border-radius: $border-radius;
      /*padding: 0 4px;*/
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      min-width: 30px;
      height: 30px;
      margin: 0 4px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      &.active, &:hover {
        border-color: $theme-color;
      }
      &.active {
        cursor: default;
      }
      &.separator {
        border: none;
        cursor: default;
      }
    }
    &-nav {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      cursor: pointer;
      &.disabled {
        svg {
          fill: lighten($grey, 20%);
        }
        cursor: not-allowed;
      }
    }
    .prev {
      margin-right: 8px;
    }
    .next {
      margin-left: 8px;
    }
  }
</style>