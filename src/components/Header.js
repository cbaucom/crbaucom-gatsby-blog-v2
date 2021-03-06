import React, { Component } from 'react'
import { Link } from 'gatsby'
import { animateScroll as scroll } from 'react-scroll'
import Logo from './icons/Logo'
import Nav from './Nav'

class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    const { location } = this.props

    return (
      <nav className="Header navbar navbar-default navbar-fixed-top">
        {(location.pathname === '/' && (
          <div onClick={this.scrollToTop} className="logo">
            <Logo />
          </div>
        )) || (
          <Link to={'/'} className="logo">
            <Logo />
          </Link>
        )}
        <Nav />
      </nav>
    )
  }
}

export default Header
