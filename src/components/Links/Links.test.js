import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Links } from './'

it('renders links', () => {
  const wrapper = shallow(<Links/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
