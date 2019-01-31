import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Logo from './icons/Logo'
import Nav from './Nav'

class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <nav className="Header navbar navbar-default navbar-fixed-top">
        {(location.pathname === '/' && (
          <ScrollLink onClick={this.scrollToTop} className="logo">
            <Logo />
          </ScrollLink>
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
