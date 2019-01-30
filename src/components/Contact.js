import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   const name = document.getElementById('name').value
  //   const email = document.getElementById('email').value
  //   const phone = document.getElementById('phone').value
  //   const message = document.getElementById('message').value
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3002/send',
  //     data: {
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       messsage: message,
  //     },
  //   }).then(response => {
  //     if (response.data.msg === 'success') {
  //       alert('Message Sent.')
  //       this.resetForm()
  //     } else if (response.data.msg === 'fail') {
  //       alert('Message failed to send.')
  //     }
  //   })
  // }

  // resetForm() {
  //   document.getElementById('contact-form').reset()
  // }

  render() {
    return (
      <div id="contact" className="Frontpage__contact">
        <div className="container centered">
          <h2 className="text">Let's build something together!</h2>
          <p>Need help with your project?</p>
          <p>
            Is your Wordpress site slow and bogged down with plugins and you
            can't wait to migrate to <a href="https://gatsbyjs.org">Gatsby?</a>
          </p>
          <p>
            Looking to build a progressive web app that works offline and looks
            great on desktops, tablets, and phones?
          </p>
          <p>Contact me and let's discuss how we can make it happen!</p>
        </div>

        <div className="contact__form">
          <form method="POST" action="https://formspree.io/crbaucom@gmail.com">
            <div className="field">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Chris Baucom"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="chris@email.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone: </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="9035551234"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message: </label>
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder=""
                required
              />
            </div>
            <div className="button__wrapper">
              <button className="submit" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
