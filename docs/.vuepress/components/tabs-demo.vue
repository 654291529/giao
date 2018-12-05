<template>
  <div>
    <gear-tabs :selected.sync="selectedTab" class="tabWrapper">
      <gear-tabs-nav>
        <template slot="actions">
          <gear-button>设置</gear-button>
        </template>
        <gear-tabs-item name="women" disabled>
          <gear-icon name="like"></gear-icon>美女
        </gear-tabs-item>
        <gear-tabs-item name="it">
          数码
        </gear-tabs-item>
        <gear-tabs-item name="sports">
          体育
        </gear-tabs-item>
        <gear-tabs-item name="other">
          其他
        </gear-tabs-item>
      </gear-tabs-nav>
      <gear-tabs-content class="tabContent">
        <gear-tabs-pane name="women">
          美女相关资讯
        </gear-tabs-pane>
        <gear-tabs-pane name="it">
          数码相关资讯
        </gear-tabs-pane>
        <gear-tabs-pane name="sports">
          体育相关资讯
        </gear-tabs-pane>
        <gear-tabs-pane name="other">
          其他相关资讯
        </gear-tabs-pane>
      </gear-tabs-content>
    </gear-tabs>
    <div style="padding: 20px 10px;">被选中的 Tab：
      <div class="selected">{{selectedTab}}</div>
    </div>
  </div>
</template>

<script>
  import Icon from '../../../src/icon'
  import Button from '../../../src/button'
  import Tabs from '../../../src/tabs'
  import TabsNav from '../../../src/tabs-nav'
  import TabsItem from '../../../src/tabs-item'
  import TabsContent from '../../../src/tabs-content'
  import TabsPane from '../../../src/tabs-pane'
  export default {
    components: {
      'gear-icon': Icon,
      'gear-button': Button,
      'gear-tabs': Tabs,
      'gear-tabs-nav': TabsNav,
      'gear-tabs-item': TabsItem,
      'gear-tabs-content': TabsContent,
      'gear-tabs-pane': TabsPane,
    },
    data() {
      return {
        selectedTab: 'sports',
      }
    }
  }
</script>

<style scoped>
  .tabContent {
    height: 200px;
  }
  .selected {
    display: inline-flex;
    color: #7b532b;
    font-weight: bold;
  }
</style>
