import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from './icons/Logo';
import Nav from './Nav';

class Header extends Component {

  render() {
    return(
      <nav className="Header navbar navbar-default navbar-fixed-top">
        <Link to={'/'} className="logo">
          <Logo />
        </Link>
        <Nav />
      </nav>
    )
  }

}

export default Header
