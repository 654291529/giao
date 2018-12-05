# 快速上手

## 写在前面
文档中会出现的以下 `emoji` 图标标识。☕️ 图标表示提示或建议，⚠️ 图标表示一般注记，❗ 图标表示警告或警示。

在快速上手 `GearCase` 之前，您最好确保已经查阅过 `Vue`、`Vue`单文件组件等文档或了解 `Vue` 相关的基本概念。若您对此还没有了解，建议您快速查阅 `Vue` [官方文档](https://cn.vuejs.org/v2/guide/components-registration.html) 进行学习与了解。

<br>

## 安装 
具体安装方式请参考 [安装](/install/README.md) 章节。

<br>

## 引入 GearCase

若您使用 `Webpack` 或 `parcel` 等构建工具，在项目的 `App.vue` 页面的 `<script>` 中进行如下引入配置。

```JS
// 引入组件
import {
  Icon,
  Button,
  ButtonGroup,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Toast,
  plugin,
  Tabs,
  TabsItem,
  TabsNav,
  TabsPane,
  TabsContent,
  Popover,
  Collapse,
  CollapseItem
} from 'gear-case'

// 引入样式
import 'gear-case/dist/index.css'
```
️⚠️ *️<font color=grey size=2>后期会整合为单独的 `Vue` 文件进行整体引入，目前仅这种方式可用。</font>*

<br>

## 注册组件

使用 `components` 注册需要使用的组件

```JS
export default {
  name: 'app',
  components: {
    'gear-icon': Icon,
    'gear-button': Button,
     ...  // 使用 components 注册需要使用的组件
  }
}
```
️⚠️ *️<font color=grey size=2>后期会整合为单独的 `Vue` 文件进行整体注册，目前仅这种方式可用。</font>*

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

️☕️ *️<font color=grey size=2>关于本文档中出现的所有 `demo` ，均为本组件库默认样式。您可以自行添加样式进行覆盖。</font>*

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

