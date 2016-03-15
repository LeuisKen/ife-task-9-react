import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import FontAwesome from 'react-fontawesome'
import { SearchInput } from '../'
import logoImg from 'ROOT/assets/images/logo.png'
import styles from './header.css'

class Header extends Component {
  render() {
    return (
      <div styleName="header">
        <img styleName="logo" src={logoImg} />
        <div className="fr">
          <SearchInput/>
          <a styleName="login" href="javascript:void(0)"><FontAwesome name="user"/> 登录</a>
        </div>
      </div>
    )
  }
}

export default CSSModules(Header, styles)
