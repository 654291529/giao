import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Slides from '@/slides.vue'
chai.use(sinonChai)

describe('Slides', () => {
  it('存在.', () => {
    expect(Slides).to.exist
  })
})