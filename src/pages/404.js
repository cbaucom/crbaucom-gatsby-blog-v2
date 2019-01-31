import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Layout from '../components/Layout'

const BieberWrapper = styled.div`
  background-image: url('../img/bieber.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100vh;
  .sorry {
    padding: 0.5rem 2rem;
  }
`

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="bieber">
          <div className="row">
            <div className="col-md-12 sorry">
              <h5>Looks like this page is missing.</h5>
              <Link to={'/'} className="btn btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
