---
title: 布局
sidebarDepth: 2
---

# 布局

grid 网格布局
---
`demo` 样式
```CSS
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

<br>

### 常规 24 网格

使用 `span` 分割 `24` 份网格，默认没有 `gutter` 间距

**基础用法**

<grid-demos-one></grid-demos-one>

```HTML
<gear-row class="demoRow">
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
</gear-row>

<gear-row class="demoRow">
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
</gear-row>

<gear-row class="demoRow">
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
</gear-row>

<gear-row class="demoRow">
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
</gear-row>
```

<br>
<br>

### 设置 gutter 间距

`gutter` 属性设置分栏之间的间距

**基础用法**

<grid-demos-two></grid-demos-two>

```HTML
<gear-row class="demoRow" gutter="10">
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
</gear-row>

<gear-row class="demoRow" gutter="10">
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6">
    <div class="demoCol">6</div>
  </gear-col>
</gear-row>

<gear-row class="demoRow" gutter="10">
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
</gear-row>
```

<br>
<br>

### 设置 offset 空隙

`offset` 属性设置网格左侧的间隔格数

**基础用法**

<grid-demos-three></grid-demos-three>

```HTML
<gear-row class="demoRow" gutter="10">
  <gear-col span="8">
    <div class="demoCol">8</div>
  </gear-col>
  <gear-col span="8" offset="8">
    <div class="demoCol">8</div>
  </gear-col>
</gear-row>
<gear-row class="demoRow" gutter="10">
  <gear-col span="6" offset="6">
    <div class="demoCol">6</div>
  </gear-col>
  <gear-col span="6" offset="6">
    <div class="demoCol">6</div>
  </gear-col>
</gear-row>
<gear-row class="demoRow" gutter="10">
  <gear-col span="4" offset="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4">
    <div class="demoCol">4</div>
  </gear-col>
  <gear-col span="4" offset="8">
    <div class="demoCol">4</div>
  </gear-col>
</gear-row>
<gear-row class="demoRow" gutter="10">
  <gear-col span="2">
    <div class="demoCol">2</div>
  </gear-col>
  <gear-col span="2" offset="20">
    <div class="demoCol">2</div>
  </gear-col>
</gear-row>
```

<br>
<br>

### 兼容响应式

可以同时配置多个关于设备的参数，实现简易的响应式布局。

**基础用法**

<grid-demos-four></grid-demos-four>

```HTML
<gear-row class="demoRow">
  <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
    <div class="demoCol"></div>
  </gear-col>
  <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
    <div class="demoCol"></div>
  </gear-col>
  <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
    <div class="demoCol"></div>
  </gear-col>
  <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
    <div class="demoCol"></div>
  </gear-col>
  <gear-col span="24" :pad="{span:12}" :narrow-pc="{span:8}" :pc="{span:6}">
    <div class="demoCol"></div>
  </gear-col>
</gear-row>

<gear-row class="demoRow">
  <gear-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
    <div class="demoCol"></div>
  </gear-col>
</gear-row>
```

**gear-row Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| gutter     | 网格间距 单位为 px | String / Number | - | - |

<br>

**gear-col Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| span    | 网格占据的列数 | Number | 1 ~ 24 | - |
| offset    | 栅格左侧的间隔格数 | Number | 1 ~ 23 | - |
| :phone    | 手机尺寸 宽度小于577px | Object (例如:{span:12}) | - | - |
| :pad    | 平板尺寸 宽度小于769px | Object | - | - |
| :narrowPc   | 窄屏电脑小于993px | Object | - | - |
| :pc    | 普通电脑 宽度小于1201px | Object | - | - |
| :widePc    | 宽屏电脑 宽度大于1201px | Object | - | - |

<br>
<br>
<br>

layout 容器布局
---

### 通栏

普通上中下通栏布局

**基础用法**

<layout-demos-one></layout-demos-one>

```HTML
<gear-layout style="color: white; margin-bottom:50px;">
  <gear-header style="height: 50px; background:lightskyblue;">header</gear-header>
  <gear-content style="height: 200px; background:deepskyblue;">content</gear-content>
  <gear-footer style="height: 50px; background:lightskyblue;">footer</gear-footer>
</gear-layout>
```
☕️ *<font color=grey size=2>该示例中的所有内联 `style` 样式主要为了 `demo` 更好的展示，实际情况建议写入到页面 `<style>`之中。</font>*

<br>
<br>

### 内容侧边栏

主体内容部分带侧边栏

**基础用法**

<layout-demos-two></layout-demos-two>

```HTML
<gear-layout style="color: white; margin-bottom:50px;">
  <gear-header style="height: 50px; background:lightskyblue;">header</gear-header>
  <gear-layout>
    <gear-sider closeButton style="height: 200px; background:#ddd; width:200px; color: black;">sider</gear-sider>
    <gear-content style="height: 200px; background:deepskyblue;">content</gear-content>
  </gear-layout>
  <gear-footer style="height: 50px; background:lightskyblue;">footer</gear-footer>
</gear-layout>
```
☕️ *<font color=grey size=2>该示例中的所有内联 `style` 样式主要为了 `demo` 更好的展示，实际情况建议写入到页面 `<style>`之中。</font>*

<br>
<br>

### 左侧边栏

侧边栏独立于左边之外

**基础用法**

<layout-demos-three></layout-demos-three>

```HTML
<gear-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <gear-sider closeButton style="background:#ddd; width:200px; color: black;">sider</gear-sider>
  <gear-layout>
    <gear-header style="height: 50px; background:lightskyblue;">header</gear-header>
    <gear-content style="height: 200px; background:deepskyblue;">content</gear-content>
    <gear-footer style="height: 50px; background:lightskyblue;">footer</gear-footer>
  </gear-layout>
</gear-layout>
```
☕️ *<font color=grey size=2>该示例中的所有内联 `style` 样式主要为了 `demo` 更好的展示，实际情况建议写入到页面 `<style>`之中。</font>*

<br>

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| closeButton    | sider 关闭动画按钮 | Boolean | - | false |

`sider` 动画时长与动画移动距离可通过修改 `sider.vue` 组件中的 `sass` 进行调整

```sass
  // sider 动画
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
```