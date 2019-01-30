import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/Layout'

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
