const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {

    it('可以接收 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)

      vm.$on('close',() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('可以接收 closeButton', () => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭',
            callback,
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('可以接收 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: { enableHtml: true }
      })
      vm.$slots.default = ['<strong id="hello">Hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#hello')
      expect(strong).to.exist
    })

    it('可以接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })

  })

})