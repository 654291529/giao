/* 插件 让用户使用 */
import  Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function(message) {
      var Constructor = Vue.extend(Toast)
      let toast = new Constructor()

      // 给 toast 传递默认插槽内容
      toast.$slots.default = [message]

      // mount
      toast.$mount()

      // 将元素放置到 body
      document.body.appendChild(toast.$el)
    }
  }
}