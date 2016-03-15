import 'normalize.css'
import '../assets/styles/style.css'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Header } from '../components'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

export default connect()(App)
