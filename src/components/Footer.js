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
  background: #023767;
  p {
    font-size: 0.7em;
    margin-bottom: 0.2rem;
    color: #fff;
  }

  ul.social,
  ul.footer-nav {
    margin-bottom: 0.2rem;
    font-size: 1.35rem;
  }

  .social li,
  .footer-nav li {
    display: inline-block;
    padding: 0.1rem 0.5rem 0 0.5rem;
  }

  .footer-nav li a,
  .social li a {
    color: #fff;
    font-weight: 500;
    line-height: 1.85;
    padding: 5px 2px;
    transition: color 400ms ease-in;
  }
  .footer-nav a:hover,
  .social li a:hover {
    color: #94bae9;
    /* border-bottom: 1px solid; */
    transition: color 400ms ease-in;
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
        <div className="">
          <ul className="footer-nav centered">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
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
          <ul className="social centered">
            <li>
              <a
                className="email"
                title="email"
                href="mailto:crbaucom@gmail.com"
                target="blank"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                className="linkedin"
                title="linkedin"
                href="https://www.linkedin.com/in/chrisbaucom"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className="github"
                title="github"
                href="https://github.com/cbaucom"
                target="blank"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                className="instagram"
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
    </FooterWrapper>
  )
}
