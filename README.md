# GearCase UI
[![Build Status](https://www.travis-ci.org/evenyao/GearCase.svg?branch=master)](https://www.travis-ci.org/evenyao/GearCase)

## 介绍

这是本人在学习 Vue 过程中所做的一个基于 Vue 的 UI 框架，希望能对你也同样有所帮助。

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
  import { Button, ButtonGroup, Icon } from 'gear-case'
  import 'gear-case/dist/index.css'

  export default {
    name: 'app',
    components: {
      'gear-button': Button,
    }
  }
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
### 作者
[evenyao](//evenyao.com)
