---
title: 通知
sidebarDepth: 2
---

# 通知

toast 弹出提示
---

### 内联属性

可以使用内联属性，直接将 `$toast` 写入到各标签的 `@click` 事件之中。

**基础用法**

<toast-demos-one></toast-demos-one>

```HTML
<gear-button @click="$toast('点击弹出提示', {autoClose: 1})">上方弹出</gear-button>
<gear-button @click="$toast('点击弹出提示', {position: 'middle'})">中间弹出</gear-button>
<gear-button @click="$toast('点击弹出提示', {position: 'bottom', closeButton: false})">下方弹出</gear-button>
```
⚠️ ️*️<font color=grey size=2>该 `toast` 组件样式 `z-index` 层级被设置为 `19999`。若您使用该 `toast` 组件的页面中含有 `z-index` 层级大于该数值的元素或组件，可能会影响该 `toast` 组件的正常显示。</font>*

<br>

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
|  autoClose  | 设置 toast 是否自动关闭，设置 false 时关闭。 | Boolean / Number | - | true / 3(秒) |
|  closeButton  | 设置 toast 是否含有关闭按钮 | Boolean | - | true |
|  enableHtml  | 设置 toast 内容是否支持 v-html | Boolean | - | false |
|  position  | 设置 toast 内容显示方位 | String | top / bottom / middle | top |
❗️️*️<font color=grey size=2>开启 `v-html` 可能会导致安全问题，使用该属性之前请慎重考虑。</font>*

<br>
<br>

### 事件属性

除内联属性用法之外，可以将其写入到 `Vue` 单文件的 `<script>` 标签的 `methods` 之中，达到相同的效果。

**基础用法**

<toast-demos-two></toast-demos-two>


```HTML
<gear-button @click="showToast1">上方弹出</gear-button>
<gear-button @click="showToast2">中间弹出</gear-button>
<gear-button @click="showToast3">下方弹出</gear-button>
```

```JS
methods: {
  // toast1 设置方位为 top, 非自动关闭, 不支持 v-html, 含 closeButton (并可以设置关闭文案和相关回调),
  showToast1(){
    // toast API
    this.$toast('this is message top', {
      position: 'top',
      autoClose: false,
      closeButton: {
        text: 'Close',
        callback(){
          console.log('callback()回调，关闭被点击了')
        }
      },
      enableHtml: false,
    })
  },
  // toast2 设置方位为 middle, 自动关闭时间为 1s, 不支持 v-html, 无 closeButton,
  showToast2() {
    this.$toast('this is message middle', {
      position: 'middle',
      autoClose: 1,
      enableHtml: false,
      closeButton: false
    })
  },
  // toast3 设置方位为 bottom, 其他为默认设置
  showToast3() {
    this.$toast('this is message bottom', {
      position: 'bottom'
    })
  }
}
```

<br>
<br>
<br>

popover 气泡确认框
---

### click 点击弹出

点击弹出模式，再次点击非内容气泡区域时关闭 `popover` 内容气泡。

**基础用法**

<popover-demos-one></popover-demos-one>

```HTML
<gear-popover>
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>点击</gear-button>
</gear-popover>

<gear-popover position="bottom">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>点击</gear-button>
</gear-popover>

<gear-popover position="left">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>点击</gear-button>
</gear-popover>

<gear-popover position="right">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>点击</gear-button>
</gear-popover>
```

<br>
<br>

### hover 悬浮弹出

悬浮弹出模式，鼠标悬浮进入 `button` 区域触发 popover 内容气泡弹出，鼠标悬浮离开 `button` 区域关闭 popover 内容气泡。

**基础用法**

<popover-demos-two></popover-demos-two>

```HTML
<gear-popover trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>悬浮</gear-button>
</gear-popover>

<gear-popover position="bottom" trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>悬浮</gear-button>
</gear-popover>

<gear-popover position="left" trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>悬浮</gear-button>
</gear-popover>

<gear-popover position="right" trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <gear-button>悬浮</gear-button>
</gear-popover>
```

⚠️ ️*️<font color=grey size=2>该 `popover` 组件弹出内容样式 `z-index` 层级被设置为 `19`。若您使用该 `popover` 组件的页面中含有 `z-index` 层级大于该数值的元素或组件，可能会影响该 `popover` 组件弹出内容的正常显示。</font>*

<br>

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
|  position  | 设置 popover 内容气泡弹出的方位 | String | top / bottom / left / right | top |
|  trigger  | 设置以何种方式使 popover 内容气泡弹出 | String | click / hover | click |
