import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Layout from '../components/Layout'
import bieber from '../assets/img/bieber.jpg'

const BieberWrapper = styled.div`
  background-image: url(${bieber});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 10em);
  .sorry {
    padding: 0.5rem 2rem;
    h5 {
      font-size: 1.2rem;
    }
  }
`

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <BieberWrapper>
      <div className="sorry">
        <h5>Looks like this page is missing.</h5>
        <Link to={'/'} className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </BieberWrapper>
  </Layout>
)

export default NotFoundPage
