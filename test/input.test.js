const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  // BDD 行为驱动测试 由 Mocha 引入

  it('存在.', () => {
    expect(Input).to.be.ok
  })

  // TDD 测试驱动开发
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('可以接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '123'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('123')
    })

    it('可以接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('可以接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('可以接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '出现了错误!'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('出现了错误!')
    })
  })


  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持 change/input/focus/blur 事件', () => {
      ['change','input','focus','blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发 input 的 各类事件
        let event = new Event(eventName)
        // 因为 target 是一个只读属性，只能通过 Object.defineProperty 来进行 value 的赋值
        Object.defineProperty(
            event, 'target', {
              value: {value: 'hi'}, enumerable: true
            })
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})