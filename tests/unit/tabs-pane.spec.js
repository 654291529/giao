import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import TabsPane from '@/tabs-pane.vue'
chai.use(sinonChai)

describe('TabsPane', () => {
  it('存在.', () => {
    expect(TabsPane).to.exist
  })
})