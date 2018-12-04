---
title: 展示
sidebarDepth: 2
---

# 展示

collapse 折叠面板
---

### 默认模式

点击多个标题可折叠展开多个内容

**基础用法**

<collapse-demos-one></collapse-demos-one>

```HTML
<gear-collapse :selected.sync="selected">
  <gear-collapse-item title="标题1" name="1">内容1</gear-collapse-item>
  <gear-collapse-item title="标题2" name="2">内容2</gear-collapse-item>
  <gear-collapse-item title="标题3" name="3">内容3</gear-collapse-item>
</gear-collapse>
<div style="padding: 20px 0;">选中（开启）的标题：
  <div class="selected">{{selected}}</div>
</div>
```

<br>
<br>
<br>

### single 模式

点击标题会折叠被点击标题之外的其他标题内容

**基础用法**

<collapse-demos-two></collapse-demos-two>

```HTML
<gear-collapse :selected.sync="selected" single>
  <gear-collapse-item title="标题1" name="1">内容1</gear-collapse-item>
  <gear-collapse-item title="标题2" name="2">内容2</gear-collapse-item>
  <gear-collapse-item title="标题3" name="3">内容3</gear-collapse-item>
</gear-collapse>
<div style="padding: 20px 0;">选中（开启）的标题：
  <div class="selected">{{selected}}</div>
</div>
```

<br>

**gear-collapse Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| selected    | 当前展开 title 的 name 组成的数组，用 .sync 修饰符绑定 | Array | 1 ~ 标题总数 | - |
| single    | 设置只能展开单个 title | Boolean | - | true |

<br>

**gear-collapse-item Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| title    | 标题内容 | String | - | - |
| name    | title 所对应的 name 属性，唯一且必填。 | String | - | - |