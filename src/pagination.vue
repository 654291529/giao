<template>
  <div class="gear-pagination">
    <span v-for="page in pages">
      {{page}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'GearPagination',
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
    data() {
      let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
      let u = unique(pages.sort((a,b) =>  a - b ))
      let u2 = u.reduce((prev,current,index) => {
        if (u[index + 1] !== undefined && u[index + 1] - u[index] > 1) {
          prev.push(current)
          prev.push('...')
        } else {
          prev.push(current)
        }
        return
      },[])

      return {
        pages: u2
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

</style>