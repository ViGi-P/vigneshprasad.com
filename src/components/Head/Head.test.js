import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Head } from './'

it('renders header', () => {
  const wrapper = shallow(<Head/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
