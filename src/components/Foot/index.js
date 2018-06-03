import React from 'react'
import { Layout, Icon } from 'antd'
import { footerIconStyle } from '../../utilities/functions'
import './Foot.css'

const { Footer } = Layout

export const Foot = () => <Footer id='Footer'>
  Developing software with <Icon type='heart' {...footerIconStyle('red')}/> from <a href='https://www.google.com/search?ei=VW0UW8W3A8r4vAS1uZqwBA&q=Kochi%2C+Kerala&oq=Kochi%2C+Kerala&gs_l=psy-ab.3..0i67k1j0i7i30k1j0j0i7i30k1l2j0j0i7i30k1l4.5301.5301.0.5606.1.1.0.0.0.0.110.110.0j1.1.0....0...1.1.64.psy-ab..0.1.110....0.BjJLtdHazNE' target='_blank' rel='noopener noreferrer'><Icon type='environment' {...footerIconStyle('orange')}/> Kochi, Kerala</a>
</Footer>
