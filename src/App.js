import React, { Component } from 'react'
import { Layout } from 'antd'
import { Head as Header , Links, Projects, Foot as Footer } from './components'
import './App.css'

const { Content } = Layout

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Content>
          <Links/>
          <Projects/>
        </Content>
        <Footer/>
      </div>
    )
  }
}

export default App
