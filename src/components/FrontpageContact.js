import React from 'react'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'

const FrontpageContactWrapper = styled.div`
  background-color: #023767;
  color: #fff;
  padding: 5rem 0;
  line-height: 1.5;
  h2 {
    font-size: 2.5rem;
  }

  @media (min-width: 600px) {
    h2 {
      font-size: 2.95rem;
      margin-bottom: 3rem;
    }
  }
  p {
    color: #eee;
    font-size: 1.65rem;
    font-weight: 100;
    margin: 5rem 1rem;
  }

  p:last-child {
    color: #eee;
    font-size: 1.75rem;
    font-weight: 900;
    margin: 5rem 1rem 1rem 1rem;
  }
  a {
    transition: all 0.3s ease-out;
  }
  a:hover {
    color: #fff;
    transition: all 0.3s ease-in;
    text-decoration: underline;
  }
`

const FrontpageContact = () => (
  <FrontpageContactWrapper id="contact">
    <div className="container centered">
      <h2 className="text">Let's build something together!</h2>
      <p>Need help with your project?</p>
      <p>
        Looking to build a progressive web app that works offline and looks
        great on desktops, tablets, and phones?
      </p>

      <p>Contact me and let's discuss how we can make it happen!</p>
    </div>
    <ContactForm />
  </FrontpageContactWrapper>
)

export default FrontpageContact
