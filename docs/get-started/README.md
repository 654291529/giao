# 快速上手

## 安装 
具体安装方式请参考 [安装](/install/README.md) 章节。

<br>

## 引入 GearCase

在引入 `GearCase` 之前，您最好确保已经查阅过 `Vue`、`Vue`单文件组件等文档或了解 `Vue` 相关的基本概念。若您对此还没有了解，建议您快速查阅 `Vue` [官方文档](https://cn.vuejs.org/v2/guide/components-registration.html) 进行学习与了解。

若您使用 `Webpack` 或 `parcel` 等构建工具，在入口页面 `app.js` 中进行如下配置，并确保路径的正确性。（后期会整合为单独的 `JS` 文件进行引入）

```JS
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsNav from './tabs-nav'
import TabsItem from './tabs-item'
import TabsContent from './tabs-content'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('gear-button', Button)
Vue.component('gear-icon', Icon)
Vue.component('gear-button-group', ButtonGroup)
Vue.component('gear-input', Input)
Vue.component('gear-row', Row)
Vue.component('gear-col', Col)
Vue.component('gear-layout', Layout)
Vue.component('gear-header', Header)
Vue.component('gear-sider', Sider)
Vue.component('gear-content', Content)
Vue.component('gear-footer', Footer)
Vue.component('gear-toast', Toast)
Vue.use(plugin)
Vue.component('gear-tabs', Tabs)
Vue.component('gear-tabs-nav', TabsNav)
Vue.component('gear-tabs-item', TabsItem)
Vue.component('gear-tabs-content', TabsContent)
Vue.component('gear-tabs-pane', TabsPane)
Vue.component('gear-popover', Popover)
Vue.component('gear-collapse', Collapse)
Vue.component('gear-collapse-item', CollapseItem)
```

<br>

## 样式建议
使用本 UI 框架前，请在 `CSS` 中开启 `border-box`。

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

`IE 8` 及以上浏览器都支持此样式。除此之外，还建议设置默认颜色等变量。

```sass
  $font-size: 14px;
  $border-radius: 4px;
  $color: #333;
  $theme-color: #70b0f4;
  $disabled-color: #DDD;
  $height: 32px;
  $error-color: #F1453D;
```

<br>

## 属性相关

若使用 `:prop` 属性传递数据格式为数字、数组、布尔值等非字符串格式时，必须在属性之前携带 `:` 。否则会当成 `String` 字符串类型进行传递而造成非预期的效果。具体情况请查阅[组件](/components/base/README.md)文档。

**<font size=4>如下案例中 `selected` 为一个数组</font>**

**<font color=green>正确的用法</font>**
```HTML
<gear-collapse :selected.sync="selected">
  ...
</gear-collapse>
```

<br>

**<font color=red>错误的用法</font>**
```HTML
<gear-collapse selected="selected">
  ...
</gear-collapse>
```