import React from 'react'
import { shallow } from 'enzyme'
import Flag from '.'

describe('Flag', () => {
  it('should render without error', () => {
    const component = shallow(
      <Flag url="wwww.google.com" countryName="Finland" />,
    )
    console.log('component.debug in first test', component.debug())
    const wrapper = component.find('img')
    expect(wrapper.length).toBe(1)
  })
})
