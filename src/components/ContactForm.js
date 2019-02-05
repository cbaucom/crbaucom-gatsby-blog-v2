import React from 'react'
import styled from 'styled-components'

const ContactFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  form {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 80%;
    input:focus,
    textarea:focus,
    select:focus {
      color: #023767;
      background-color: #eee;
    }
  }
  .field {
    margin-bottom: 2rem;
  }
  .field input,
  .field textarea,
  .field select {
    background: #fff;
    border-color: #94bae9;
    border-radius: 5px;
    color: #023767;
    display: block;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 42px;
    padding: 18px 10px;
    outline: none;
    transition: color 0.2s linear, opacity 0.2s linear,
      background-color 0.2s linear, border-color 0.2s linear;
    width: 100%;
  }
  button.submit {
    background: #fff;
    border: none;
    border-radius: 3px;
    color: #023767;
    cursor: pointer;
    display: inline-block;
    height: auto;
    font-size: 1.25rem;
    letter-spacing: 3px;
    padding: 1.25rem;
    text-transform: uppercase;
    transition: all 0.7s ease-out;
  }
  button.submit:hover {
    color: #fff;
    background: #94bae9;
    transition: all 0.7s ease-in;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ContactForm = () => (
  <ContactFormWrapper>
    <form
      id="contact"
      method="POST"
      action="https://formspree.io/crbaucom@gmail.com"
    >
      <div className="field">
        <label htmlFor="name" aria-labelledby="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email" aria-labelledby="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="phone" aria-labelledby="phone">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          autoComplete="tel"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message" aria-labelledby="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          type="text"
          name="message"
          placeholder="Message"
          required
        />
      </div>
      <ButtonWrapper>
        <button className="submit" type="submit">
          Send
        </button>
      </ButtonWrapper>
    </form>
  </ContactFormWrapper>
)

export default ContactForm
