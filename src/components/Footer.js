import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa'

const FooterWrapper = styled.footer`
  padding: 20px;
  font-size: 1.3em;
  background: #94bae9;
  p {
    font-size: 0.7em;
    margin-bottom: 0.2rem;
  }
  .footer-nav a:hover,
  .social li a:hover {
    border-bottom: 1px solid;
  }

  ul.social,
  ul.footer-nav {
    padding-left: 0;
    margin-bottom: 0.2rem;
    font-size: 1.35rem;
  }

  .social li,
  .footer-nav a {
    display: inline-block;
    padding: 0.1rem 0.5rem 0 0.5rem;
  }

  .footer-nav a,
  .social li a {
    color: #fff;
    font-weight: 500;
    line-height: 1.85;
  }

  @media (max-width: 767px) {
    footer {
      padding: 0px;
      font-size: 1.2em;
    }
    footer p {
      margin: 0;
    }
    ul.social {
      margin-bottom: 0;
    }
    .footer-nav a {
      font-size: 1em;
    }
  }
`

export default () => {
  return (
    <FooterWrapper>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ul className="footer-nav centered">
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
          </ul>
          {/* <ul className="social centered">
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
          </ul> */}
          <p className="centered">
            &copy; {new Date().getFullYear()} Chris Baucom.
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}
