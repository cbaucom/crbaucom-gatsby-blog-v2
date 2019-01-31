import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav className="Navigation">
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Link to={'/projects'}>Projects</Link>
      </li>
      <li>
        <Link to={'/blog'}>Blog</Link>
      </li>
      <li>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
