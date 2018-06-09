import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Projects } from './'

it('renders projects', () => {
  const wrapper = shallow(<Projects/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
