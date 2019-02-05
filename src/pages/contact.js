import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

import Layout from '../components/Layout'
import Contact from '../components/ContactForm'

const ContactPageWrapper = styled.main`
  min-height: 100vh;
  animation: 1s ease-out 0s 1 slideUpFade;
`

const ContactHero = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 4em 2em;
  display: flex;
  align-items: center;
  @media (min-width: 900px) {
    padding: 4em 5em;
  }
  .container {
    margin-top: -10rem;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    h1 {
      margin-bottom: 1em;
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5em;
    }
  }
`

const DownArrowWrapper = styled.div`
  ::before {
    cursor: pointer;
    content: '';
    position: absolute;
    top: 70%;
    left: 50%;
    width: 1.5em;
    height: 1.5em;
    border: 3px solid #023767;
    border-top: none;
    border-left: none;
    transform: translate(-50%, -110%) rotate(45deg);
    @media (max-width: 400px) {
      top: 80%;
    }
  }
`

const FormWrapper = styled.div`
  background: #023767;
  color: #fff;
  padding: 5rem 1rem;
`

const focusMethod = function getFocus() {
  document.getElementById('name').focus()
}

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <ContactPageWrapper>
      <ContactHero>
        <div className="container">
          <h1>Let's work together 🤝</h1>
          <div className="blurb">
            <p>Have a question or looking to get started with a project?</p>
            <p>Contact me below and let's schedule 15 - 30 min to chat!</p>
          </div>
        </div>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={focusMethod}
        >
          <DownArrowWrapper />
        </ScrollLink>
      </ContactHero>
      <FormWrapper>
        <Contact />
      </FormWrapper>
    </ContactPageWrapper>
  </Layout>
)

export default ContactPage
