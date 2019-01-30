import React from 'react'
import Link from 'gatsby-link'

import '../assets/css/bootstrap-grid.css'

export default () => {
  return (
    <footer className="Footer">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ul className="footer-nav centered">
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/videos'}>Videos</Link>
          </ul>
          <ul className="social centered">
            {/* <li>
              <a href="/resume" className="fas fa-file-alt" />
            </li> */}
            <li>
              <a
                title="email"
                href="mailto:crbaucom@gmail.com"
                target="blank"
                className="fas fa-envelope"
              />
            </li>
            <li>
              <a
                title="linkedin"
                href="https://www.linkedin.com/in/chrisbaucom"
                target="blank"
                className="fab fa-linkedin"
              />
            </li>
            <li>
              <a
                title="github"
                href="https://github.com/cbaucom"
                target="blank"
                className="fab fa-github-square"
              />
            </li>
            <li>
              <a
                title="facebook"
                href="https://facebook.com/baucom"
                target="blank"
                className="fab fa-facebook-square"
              />
            </li>
            <li>
              <a
                title="instagram"
                href="https://instagram.com/chrisbaucom"
                target="blank"
                className="fab fa-instagram"
              />
            </li>
          </ul>
          <p className="centered">
            &copy; {new Date().getFullYear()} Chris Baucom.
          </p>
        </div>
      </div>
    </footer>
  )
}
