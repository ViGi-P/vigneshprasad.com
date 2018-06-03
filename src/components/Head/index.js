import React from 'react'
import { Layout, Card, Row, Col } from 'antd'
import DP from '../../assets/DP.jpg'
import Background from '../../assets/Background.jpg'
import './Head.css'

const { Header } = Layout
const { Meta } = Card

export const Head = () => <Header className='Header' style={{ background: `url(${Background})` }}>
  <Row>
    <Col xs={24} sm={12} md={12} lg={10}>
      <Card
        bordered={false}
        className='Main-card'
        cover={<img id='DP' src={DP} alt='DP'/>}
      >
        <Meta
          title={<div className='Main-card-text'>Vignesh Prasad</div>}
          description={<div className='Main-card-text'>Software Engineer</div>}
        />
      </Card>
    </Col>
  </Row>
</Header>
