import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import FrontpageHeroBlurb from '../components/FrontpageHeroBlurb'
import FrontpageVideo from '../components/FrontpageVideo'
import PostLoop from '../components/PostLoop'
import FrontpageContact from '../components/FrontpageContact'

import '../assets/css/video-react.css'
import '../assets/css/bootstrap-grid.css'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
    }
  }

  render() {
    let { data } = this.state
    const skip = true
    const { blog, projects } = data

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.blog.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="Frontpage">
          <FrontpageHero />
          <FrontpageHeroBlurb />

          {/*------- Projects loop -------*/}
          <div className="container pt3">
            <h2 className="Title text blue">Latest projects</h2>
          </div>
          <PostLoop loop={projects.edges} skip={!skip} />
          <div className="container centered pb2">
            <Link to={'projects'} className="btn">
              See more projects
            </Link>
          </div>

          <FrontpageVideo />

          {/*------- Featured image -------*/}
          <div className="container pt3">
            <h2 className="Title text blue">Latest posts</h2>
          </div>

          {/*------- Posts loop -------*/}
          <PostLoop loop={blog.edges} />
          <div className="container centered pb2">
            <Link to={'blog'} className="btn">
              Check out other blog posts
            </Link>
          </div>

          <FrontpageContact />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { frontmatter: { section: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            section
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
      filter: { frontmatter: { section: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            section
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
