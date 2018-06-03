import React from 'react'
import { List, Card, Icon } from 'antd'
import { icons, data } from '../../utilities/constants'
import './Projects.css'

const { Item } = List

export const Projects = () => <List
  header={<div id='List-header'>Latest Projects</div>}
  itemLayout='vertical'
  split={false}
  className='Projects'
  grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 6 }}
  dataSource={data}
  renderItem={item => (
    <Item>
      <Card
        className='Project-card'
        bordered={false}
        title={item.title}
        actions={Object.keys(icons).filter(icon => typeof item[icon] === 'string').map(icon =>  <a href={item[icon]} target='_blank' rel='noopener noreferrer'>
          <Icon type={icons[icon]}/>
        </a>)}
      >
        <div className='Project-card-content'>{item.description}</div>
      </Card>
    </Item>
  )}
/>
