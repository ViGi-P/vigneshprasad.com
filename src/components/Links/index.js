import React from 'react'
import { Row, Col, Icon } from 'antd'
import './Links.css'

export const Links = () => <Row>
  <Col className='Special' xs={24} sm={10} md={10} lg={12}>
    <h2>React, React Native & DevOps Specialist.</h2>
    <p className='Profile-links'>
      <a href='mailto:vigneshdmanfb@gmail.com' target='_blank' rel='noopener noreferrer'>
        <Icon type='mail'/>
      </a>
      <a href='https://github.com/ViGi-P' target='_blank' rel='noopener noreferrer'>
        <Icon type='github'/>
      </a>
      <a href='https://gitlab.com/ViGi-P' target='_blank' rel='noopener noreferrer'>
        <Icon type='gitlab'/>
      </a>
      <a href='https://www.linkedin.com/in/vignesh-prasad' target='_blank' rel='noopener noreferrer'>
        <Icon type='linkedin'/>
      </a>
      <a href='https://twitter.com/vigneshdman' target='_blank' rel='noopener noreferrer'>
        <Icon type='twitter'/>
      </a>
      <a href='https://www.instagram.com/vigneshdman/' target='_blank' rel='noopener noreferrer'>
        <Icon type='instagram'/>
      </a>
    </p>
  </Col>
</Row>
