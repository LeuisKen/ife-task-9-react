import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import logoImg from 'ROOT/assets/images/logo.png'
import styles from './header.css'

class Header extends Component {
  render() {
    return (
      <div styleName="header">
        <img src={logoImg} />
      </div>
    )
  }
}

export default CSSModules(Header, styles)
