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
| span    | 网格占据的列数 | Number | 1-24 | - |
| offset    | 栅格左侧的间隔格数 | Number | 1-23 | - |
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

**基础用法**

<layout-demos-one></layout-demos-one>


### 内容侧边栏

**基础用法**

<layout-demos-two></layout-demos-two>

### 左侧边栏

**基础用法**

<layout-demos-three></layout-demos-three>