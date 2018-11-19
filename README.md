# GearCase UI
[![Build Status](https://www.travis-ci.org/evenyao/GearCase.svg?branch=master)](https://www.travis-ci.org/evenyao/GearCase)
![Cocoapods](https://img.shields.io/cocoapods/l/AFNetworking.svg)
![GearCase](https://img.shields.io/badge/gearcase-0.0.6-orange.svg)



## 介绍

这是本人在学习 Vue 过程中所做的一个基于 Vue 的 UI 框架，希望能对你也同样有所帮助。目前还在持续更新中，过程中某些组件可能暂时无法使用，尽情谅解。

## 现有轮子
- Button
- ButtonGroup
- Input
- Grid
- Layout
- Toast

## 开始使用

### 1. 添加 CSS 样式
  使用本 `UI` 框架前，请在 `CSS` 中开启 `border-box`

  ```
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ```
  IE 8 及以上浏览器都支持此样式。

  除此之外，你还需要设置默认颜色等变量。（后续会更改为 `SCSS` 变量）
  ```
  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  此样式除 IE 外兼容所有现代浏览器。

### 2. 安装 gear-case
  ```
  npm i -S gear-case
  ```

### 3. 引入 gear-case
  ```
  import { ButtonGroup, Button, Icon, Input , Row, Col, Layout, Header, Sider, Content, Footer, Toast, plugin } from 'gear-case'
  import 'gear-case/dist/index.css'

  export default {
    name: 'app',
    components: {
      'gear-button': Button,
    }
  }
  ```

## 文档
### 构建中

## 联系我
[evenyao](//evenyao.com)

![](https://evenyao-1257191344.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png)
