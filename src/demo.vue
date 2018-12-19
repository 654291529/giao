<template>
  <div>
    <p>通知外部：</p>
    <p>{{ selected && selected[0] && selected[0].name || '空' }}</p>
    <p>{{ selected && selected[1] && selected[1].name || '空' }}</p>
    <p>{{ selected && selected[2] && selected[2].name || '空' }}</p>
    <gear-cascader :source.sync="source" :selected.sync="selected"
                   popover-height="200px" :load-data="loadData"
                   @update:source="onUpdateSource"
                   @update:selected="onUpdateSelected"
    ></gear-cascader>
    <p>22222</p>
  </div>
</template>

<script>
  import Button from './button'
  import Icon from './icon'
  import Cascader from './cascader'
  import db from './city-db'

  function ajax (parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node => {
          // 判断是否是最终节点
           if( db.filter((item) => item.parent_id === node.id).length > 0 ){
             node.isLeaf = false
           } else {
             node.isLeaf = true
           }
        })
        success(result)
      }, 300)
    })
  }

  console.log(ajax())

  export default {
    name: 'demo',
    components: {
      'gear-button': Button,
      'gear-icon': Icon,
      'gear-cascader': Cascader
    },
    data(){
      return {
        selected: [],
        // source: [{
        //   name: '浙江',
        //   children: [
        //     {
        //       name: '杭州',
        //       children: [
        //         { name: '上城' },
        //         { name: '下城' },
        //         { name: '江干' },
        //       ]
        //     },
        //     {
        //       name: '嘉兴',
        //       children: [
        //         { name: '南湖' },
        //         { name: '秀洲' },
        //         { name: '嘉善' },
        //       ]
        //     },
        //   ]
        // }, {
        //   name: '福建',
        //   children: [
        //     {
        //       name: '福州',
        //       children: [
        //         { name: '鼓楼' },
        //         { name: '台江' },
        //         { name: '仓山' },
        //       ]
        //     },
        //   ]
        // }, {
        //   name: '安徽',
        //   children: [
        //     {
        //       name: '合肥',
        //       children: [
        //         { name: '瑶海' },
        //         { name: '庐阳' }
        //       ]
        //     }
        //   ]
        // }]
        // source: ajax()  // 从请求获取
        source: []
      }
    },
    created () {
      ajax(0).then(result => {
        console.log(result)
        this.source = result
      })
    },
    methods: {
      loadData({ id }, updateSource) {
        ajax(id).then(result => {
          updateSource(result)
        })
      },
      xxx() {
        console.log(this.selected)
        ajax(this.selected[0].id).then(result => {
          let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
          this.$set(lastLevelSelected, 'children', result)
        })
      },
      onUpdateSource () {
      },
      onUpdateSelected () {
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-size: 14px;
  }

  body {
    font-size: var(--font-size);
  }
</style>