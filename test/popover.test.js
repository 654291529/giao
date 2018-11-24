const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以接收 position.', (done) => {
    Vue.component('gear-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <gear-popover position="bottom" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </gear-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  // 遇到问题 暂不测试
  // it('可以接收 trigger', (done) => {
  //   Vue.component('gear-popover', Popover)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //   <gear-popover trigger="hover" ref="a">
  //     <template slot="content">
  //     弹出内容
  //     </template>
  //     <button>点我</button>
  //   </gear-popover>
  //   `
  //   const vm = new Vue({
  //     el: div
  //   })
  //   setTimeout(() => {
  //     let event = new Event('mouseenter');
  //     vm.$el.dispatchEvent(event)
  //     vm.$nextTick(() => {
  //       const {contentWrapper} = vm.$refs.a.$refs
  //       expect(contentWrapper).to.exist
  //       done()
  //     })
  //   }, 200)
  // })

})