import React, { Component } from 'react'
import { Layout } from 'antd'
import { Head as Header , Links, Projects, Foot as Footer, Spinner } from './components'
import './App.css'

const { Content } = Layout

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <div className='App'>
        <Header/>
        <Content>
          <Links/>
          <Projects/>
        </Content>
        <Footer/>
        {loading && <Spinner/>}
      </div>
    )
  }
}

export default App
