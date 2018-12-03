---
title: 表单
sidebarDepth: 2
---

# 表单

input 输入框
---

**基础用法**

<input-demos></input-demos>

```HTML
<gear-input value="Normal"></gear-input>
<gear-input type="password" placeholder="type password"></gear-input>
<gear-input value="Disabled" :disabled="true"></gear-input>
<gear-input value="Readonly" :readonly="true"></gear-input>

<gear-input value="Error" error="出现错误了!"></gear-input>
<gear-input :error="error" @input="inputValueChange" v-model="message2"  placeholder="不能超过5个字符"></gear-input>
<gear-input value="双向数据绑定" v-model="message"></gear-input><p class="message">{{message}}</p>
```

**Attributes**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: |:------:| :------:| :------:| :------:|
| value     | 原生属性 | String | - | - |
| placeholder     | 原生属性 | String | - | - |
| type     | 原生属性 | String | - | - |
| disabled     | disabled 状态 无法被选中（点击） | Boolean | - | false |
| readonly     | readonly 状态 可以被选中（点击） | Boolean | - | false |
| error     | error 状态 | String | - | - |