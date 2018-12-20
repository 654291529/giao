// 外部点击指令
export default {
  bind: function(el, binding, vnode) {
    document.addEventListener('click', (e) => {
      let { target } = e
      if (target === el || el.contains(target)) {
        console.log('inside')
        return
      }
      binding.value()
    })
  }
}