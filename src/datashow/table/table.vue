<template>
  <div class="gear-table-wrapper">
    <table class="gear-table" :class="{ bordered, compact, striped }">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns">
            {{column.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item,index in dataSource">
          <th><input type="checkbox"></th>
          <td v-if="numberVisible">{{index + 1}}</td>
          <template v-for="column in columns">
            <td>{{item[column.field]}}</td>
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
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true
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
