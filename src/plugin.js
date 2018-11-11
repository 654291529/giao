/* 插件 让用户使用 */
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function() {
      console.log('this is toast')
    }
  }
}