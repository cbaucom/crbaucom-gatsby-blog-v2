import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import styled from 'styled-components'
import {
  Player,
  BigPlayButton,
  ControlBar,
  PlaybackRateMenuButton,
} from 'video-react'
import Layout from '../components/Layout'
import Featured from '../components/Featured'
import PostLoop from '../components/PostLoop'
import Contact from '../components/Contact'
import CrbaucomPortrait from '../assets/img/avatar-face-400px.png'
import '../assets/css/video-react.css'
import '../assets/css/bootstrap-grid.css'

const Title = styled.h3`
  margin-bottom: 5px;
`
class BlogIndex extends React.Component {
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
          <div className=" Frontpage__about pt2">
            <div className="Frontpage__avatar col-sm-4">
              <img src={CrbaucomPortrait} />
            </div>
            <div className="container Frontpage__about__blurb col-sm-8">
              <h1>Hello, world.</h1>
              <p>
                My name is Chris. I'm a 30-something-year-old{' '}
                <strong>engineer</strong> and <strong>web developer</strong>{' '}
                from Texas. I'm have been living in Boston for the past 11
                years. I bleed{' '}
                <a
                  className="hover"
                  href="https://goheels.com/documents/2018/9/13/2018_19_UNC_M_Basketball_Schedule.pdf"
                >
                  Carolina Blue
                </a>
                . I love skiing, photography, listening to music, and making
                websites!
              </p>
            </div>
          </div>

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

          <div className="Frontpage__video">
            <div className="stripe-container">
              <div className="stripe" />
            </div>
            <div className="container">
              <div className="video-section">
                <h2 className="Title text blue">Videos</h2>

                <div className="row">
                  <div className="col-md-9 vertical-center">
                    <Player
                      playsInline
                      poster="https://resume.crbaucom.com/files/sprayAnna.jpg"
                      src="https://resume.crbaucom.com/files/sprayAnnaKillington.mp4"
                    >
                      <BigPlayButton position="center" />
                      <ControlBar autoHide={false}>
                        <PlaybackRateMenuButton
                          rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                          order={7.1}
                        />
                      </ControlBar>
                    </Player>
                  </div>
                  <div className="col-md-3 vertical-center">
                    <p className="lead">
                      I like to mess around with Final Cut Pro from time to
                      time. This one is my all-time favorite!
                    </p>
                    <Link to={'videos'} className="btn">
                      View more videos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*------- Featured image -------*/}
          <div className="container pt3">
            <h2 className="Title text blue">Latest posts</h2>
          </div>
          <Featured post={blog.edges[0].node} />

          {/*------- Posts loop -------*/}
          <PostLoop loop={blog.edges} skip={skip} />
          <div className="container centered pb2">
            <Link to={'blog'} className="btn">
              Check out other blog posts
            </Link>
          </div>

          <Contact />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      # limit: 3
      filter: { frontmatter: { section: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  srcSet
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
      limit: 2
      filter: { frontmatter: { section: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  srcSet
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
