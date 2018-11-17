const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsItem from '../src/tabs-item'
import TabsContent from '../src/tabs-content'
import TabsPane from '../src/tabs-pane'
Vue.component('gear-tabs', Tabs)
Vue.component('gear-tabs-nav', TabsNav)
Vue.component('gear-tabs-item', TabsItem)
Vue.component('gear-tabs-content', TabsContent)
Vue.component('gear-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('可以接收 selected prop', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <gear-tabs selected="it">
          <gear-tabs-nav>
            <gear-tabs-item name="women" disabled> 美女 </gear-tabs-item>
            <gear-tabs-item name="it"> 数码 </gear-tabs-item>
            <gear-tabs-item name="sports"> 体育 </gear-tabs-item>
          </gear-tabs-nav>
          <gear-tabs-content>
            <gear-tabs-pane name="women"> 美女相关资讯 </gear-tabs-pane>
            <gear-tabs-pane name="it"> 数码相关资讯 </gear-tabs-pane>
            <gear-tabs-pane name="sports"> 体育相关资讯 </gear-tabs-pane>
          </gear-tabs-content>
        </gear-tabs>
        `

    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="it"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

})