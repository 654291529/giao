/* 插件 让用户使用 */
import  Toast from './toast'

let currentToast

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData: toastOptions }) //新建一个函数
    }
  }
}



/* helpers */
function createToast({ Vue, message, propsData }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })

  // 给 toast 传递默认插槽内容
  toast.$slots.default = [message]

  // mount
  toast.$mount()

  // 将元素放置到 body
  document.body.appendChild(toast.$el)

  return toast
}