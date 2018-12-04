# 快速上手

## 安装 
具体安装方式请参考 [安装](/install/README.md) 章节

<br>

## 启用 border-box
使用本 UI 框架前，请在 `CSS` 中开启 `border-box`

```css
*, *::before, *::after {
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

<br>