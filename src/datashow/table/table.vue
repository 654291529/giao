<template>
  <div class="gear-table-wrapper">
    <table class="gear-table" :class="{ bordered, compact, striped }">
      <thead>
        <tr>
          <th><input type="checkbox" @change="onChangeAll" ref="allChecked" :checked="isAllSelected"></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            <div class="gear-table-header">
              {{column.text}}
            <span v-if="column.field in sortRules" class="gear-table-sorter" @click="changeSortRules(column.field)">
             <gear-icon name="sortup" :class="{ active: sortRules[column.field] === 'asc' }"></gear-icon>
             <gear-icon name="sortdown" :class="{ active: sortRules[column.field] === 'desc' }"></gear-icon>
            </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item,index in dataSource" :key="item.id">
          <th>
            <input type="checkbox" @change="onChangeCheckBox(item, index, $event)"
            :checked="inSelectedItems(item)">
          </th>
          <td v-if="numberVisible">{{index + 1}}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Icon from '../../base/icon/icon'
  export default {
    name: 'GearTable',
    components: {
      'gear-icon': Icon
    },
    props: {
      selectedItems: {
        type: Array,
        default: () => []
      },
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true,
        // 保证每一项都有 id
        validator(array){
          if(array.filter(item => item.id === undefined).length > 0) {
            return false
          } else {
            return true
          }
        }
      },
      // 设置显示编号
      numberVisible: {
        type: Boolean,
        default: false
      },
      // 设置边框
      bordered: {
        type: Boolean,
        default: false
      },
      // 设置紧凑样式
      compact: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: true
      },
      // 排序规则
      sortRules: {
        type: Object,
        default: () => ({}),
      }
    },
    watch: {
      selectedItems() {
        if(this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else if(this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
          this.$refs.allChecked.checked = false
        } else {
          this.$refs.allChecked.indeterminate = true // 开启 checkbox 半选样式
        }
      }
    },
    computed: {
      // 所有都被选中
      isAllSelected(){
        // 当前显示数据的 id
        const a = this.dataSource.map(item => item.id).sort()
        // 用户选中数据的 id
        const b = this.selectedItems.map(item => item.id).sort()
        // 对比
        if(a.length === b.length) {
          let equal = true
          for(let i = 0; i < a.length; i++) {
            if(a[i] !== b[i]) {
              equal = false
              break
            }
          }
          return equal
        } else {
          return false
        }
      }
    },
    methods: {
      inSelectedItems(item){
        return this.selectedItems.filter((i) => i.id === item.id).length > 0
      },
      onChangeCheckBox(item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if(selected) {
          copy.push(item)
        } else {
          copy = copy.filter(i => i.id !== item.id)
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAll(e) {
        let selected = e.target.checked
        if(selected) {
          this.$emit('update:selectedItems', this.dataSource)
        } else {
          this.$emit('update:selectedItems', [])
        }
      },
      // 排序
      changeSortRules(key) {
        const copy = JSON.parse(JSON.stringify(this.sortRules))
        let oldValue = copy[key]
        if(oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:sortRules', copy)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";
  $grey: lighten($grey,40%);
  .gear-table {
    width: 100%;
    border-collapse: collapse;   // 边框合并在一起
    border-spacing: 0;   // 边框间间距
    border-bottom: 1px solid $grey;
    &.bordered {
      border: 1px solid $grey;
      td,th {
        border: 1px solid $grey;
      }
    }
    &.compact {
      td,th {
        padding: 4px;
      }
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: #FFF;
          }
          &:nth-child(even) {
            background: $table-item-bg;
          }
        }
      }
    }
    td,th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-sorter {
      display: inline-flex;
      flex-direction: column;
      margin: 0 4px;
      svg {
        width: 8px;
        height: 8px;
        fill: $grey;
        cursor: pointer;
        &.active {
          fill: $theme-color;
        }
      }
    }
  }

</style>
