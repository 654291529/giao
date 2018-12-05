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

<br>
<br>
<br>

tabs 标签页
---

**基础用法**

<tabs-demo></tabs-demo>

```HTML
<gear-tabs :selected.sync="selectedTab">
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
  <gear-tabs-content>
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
```

<br>

**gear-tabs Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| selected    | 设置默认被选中的 tabs-item ，用 .sync 修饰符绑定 | String | 必须是 name 中含有的字符串 | - |

<br>

**gear-tabs-nav Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| actions    | 可以设置 template 标签，slot 属性取名为 actions，在内部放置 gear-button 用来触发某些事件 | - | - | - |


<br>

**gear-tabs-item Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| name  | 设置 name ，标记 tabs-item 名称，对应 tabs-pane 中设置的 name | String / Number | 同一组 name 与 tabs-pane 设置的 name 应该相同 | - |
| disabled  | 设置 tabs-item 是否被禁用 | Boolean | - | false |


<br>

**gear-tabs-pane Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| name  | 设置 name ，标记 tabs-pane 名称，与 tabs-item 中设置的 name 对应 | String / Number | 同一组 name 与 tabs-item 设置的 name 应该相同 | - |

<br>

⚠️ *️<font color=grey size=2>若出现 `tabs-item` 与 `tabs-pane` 内容不匹配的情况，可能是由于 `name` 属性设置不对应造成的，请务必检查每一组 `tabs-item` 与 `tabs-pane` 的 `name` 属性必须相同。</font>*