import React from 'react'
import Link from 'gatsby-link'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa'

export default () => {
  return (
    <footer className="Footer">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ul className="footer-nav centered">
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
          </ul>
          <ul className="social centered">
            <li>
              <a title="email" href="mailto:crbaucom@gmail.com" target="blank">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                title="linkedin"
                href="https://www.linkedin.com/in/chrisbaucom"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                title="github"
                href="https://github.com/cbaucom"
                target="blank"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                title="instagram"
                href="https://instagram.com/chrisbaucom"
                target="blank"
              >
                <FaInstagram />
              </a>
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
