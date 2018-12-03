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
          <p>
            In need of a beautiful, responsive, progressive web app? Email me
            and let's discuss how we can make it happen!
          </p>

          <div className="row">
            <div className="col-sm-12 text-center">
              <form
                method="POST"
                action="https://formspree.io/crbaucom@gmail.com"
              >
                <div className="form-group">
                  <label className="col-sm-3" htmlFor="name">
                    Name:
                  </label>
                  <input
                    id="name"
                    className="col-sm-9 form-control"
                    type="text"
                    name="name"
                    placeholder="Chris Baucom"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-3">
                    Email:{' '}
                  </label>
                  <input
                    id="email"
                    className="col-sm-9 form-control"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="col-sm-3">
                    Phone:{' '}
                  </label>
                  <input
                    id="phone"
                    className="col-sm-9 form-control"
                    type="tel"
                    name="phone"
                    placeholder="9035551234"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="col-sm-3">
                    Message:{' '}
                  </label>
                  <textarea
                    id="message"
                    className="col-sm-9 form-control"
                    type="text"
                    name="message"
                    placeholder="I'd love to hire you to build my website!"
                    required
                  />
                </div>
                <div>
                  <button className="submit" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
