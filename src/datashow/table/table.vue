<template>
  <div class="gear-table-wrapper">
    <table class="gear-table" :class="{ bordered, compact, striped }">
      <thead>
        <tr>
          <th><input type="checkbox" @change="onChangeAll" ref="allChecked" :checked="isAllSelected"></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            {{column.text}}
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
  export default {
    name: 'GearTable',
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
        return this.dataSource.length === this.selectedItems.length
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
  }

</style>
