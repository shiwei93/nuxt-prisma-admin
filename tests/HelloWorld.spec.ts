import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm).toBeTruthy()
  })
})
