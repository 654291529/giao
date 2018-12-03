---
title: 基础
sidebarDepth: 2
---

# 基础

icon 图标
---
提供少量 `iconFont` 图标。

**基础用法**

<icon-demos></icon-demos>

```HTML
<gear-icon class="icon" name="warn"></gear-icon>
<gear-icon class="icon" name="error"></gear-icon>
<gear-icon class="icon" name="loading"></gear-icon>
<gear-icon class="icon" name="setting"></gear-icon>
<gear-icon class="icon" name="left"></gear-icon>
<gear-icon class="icon" name="right"></gear-icon>
<gear-icon class="icon" name="down"></gear-icon>
<gear-icon class="icon" name="like"></gear-icon>
```

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| name     | 图标名称 | String | - | - |

<br>
<br>
<br>

button 按钮
---

**基础用法**

<button-demos></button-demos>  

```HTML
<gear-button>默认按钮</gear-button>
<gear-button icon="setting">图标按钮</gear-button>
<gear-button :loading="true">加载按钮</gear-button>
<gear-button icon="setting" icon-position="right" :loading="loading" @click="loading = !loading">
  点击加载
</gear-button>
```

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| icon     | icon 图标 | String | - | - |
| icon-position  | icon 方位 | String | left,right | left |
| :loading     | loading 效果 | Boolean | - | - |

<br>
<br>
<br>

button-group 组合按钮
---

横向排列的按钮组合

**基础用法**

<button-group-demos></button-group-demos>  

```HTML
<gear-button-group>
  <gear-button icon="left">上一页</gear-button>
  <gear-button>更多</gear-button>
  <gear-button icon="right" icon-position="right">下一页</gear-button>
</gear-button-group>
```