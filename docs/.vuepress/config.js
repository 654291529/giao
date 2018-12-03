module.exports = {
  title: '📦 GearCase UI',
  description: '简易好用的 UI 框架',
  themeConfig: {
    nav: [
      { text: '文档', link: '/' },
      { text: '作者主页', link: 'https://evenyao.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/base/',
          '/components/form/',
          '/components/layout/',
        ]
      },
    ]
  }
}