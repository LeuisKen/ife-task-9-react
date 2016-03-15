import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import FontAwesome from 'react-fontawesome'
import logoImg from 'ROOT/assets/images/logo.png'
import styles from './searchInput.css'

class SearchInput extends Component {
  render() {
    return (
      <div styleName="search">
        <FontAwesome styleName="letter" name="search" />
        <input styleName="input" type="text"/>
      </div>
    )
  }
}

export default CSSModules(SearchInput, styles)
