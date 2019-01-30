import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Contact from '../components/Contact'

const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class ContactPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <ContactPageWrapper>
          <Contact />
        </ContactPageWrapper>
      </Layout>
    )
  }
}

export default ContactPage
