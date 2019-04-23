import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

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

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      error: '',
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.name || !this.state.email || !this.state.phone) {
      this.setState(() => ({
        error: 'Please provide your name, email, and phone number',
      }))
    } else {
      // Clear the error
      this.setState(() => ({ error: '' }))

      const form = e.target
      const name = this.state.name

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': form.getAttribute('name'), ...this.state }),
      })
        .then(() =>
          navigate(form.getAttribute('action'), {
            state: { name },
          })
        )
        .catch(error => alert(error))
    }
  }

  render() {
    return (
      <ContactFormWrapper>
        <form
          name="contact"
          method="post"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {this.state.error && <p className="form-error">{this.state.error}</p>}
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label htmlFor="name" aria-labelledby="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.phone}
              onChange={this.handleChange}
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
              name="message"
              type="text"
              placeholder="Message"
              rows="4"
              value={this.state.message}
              onChange={this.handleChange}
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
  }
}

export default ContactForm
