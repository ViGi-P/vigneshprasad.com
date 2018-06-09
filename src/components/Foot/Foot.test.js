import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Foot } from './'

it('renders footer', () => {
  const wrapper = shallow(<Foot/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
