import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import {
  Player,
  BigPlayButton,
  ControlBar,
  PlaybackRateMenuButton,
} from 'video-react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import Featured from '../components/Featured'
import PostLoop from '../components/PostLoop'
import Contact from '../components/Contact'
import Icon from '../elements'
import NodeIcon from '../assets/img/nodejs-black.png'
import LaravelIcon from '../assets/img/laravel-text-logo.png'
import '../assets/css/video-react.css'
import '../assets/css/bootstrap-grid.css'

const TechnologiesWrapper = styled.div`
  background: #eee;
  padding: 5rem 3rem;
  font-size: 1.5rem;
  text-align: center;
  .content--wrapper {
    width: 90vw;
    margin: 0 auto;
  }
  h1 {
    font-weight: 600;
  }
  h3 {
    font-weight: 500;
  }
  svg,
  img {
    margin: 1rem;
    height: 100%;
    align-self: center;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 2.474rem;
      margin-bottom: 2.5rem;
    }
    h3 {
      font-size: 1.74rem;
      font-weight: 500;
    }
  }
  @media (max-width: 600px) {
    padding: 3rem 1rem;
    h1 {
      font-size: 2.074rem;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: 1.44rem;
    }
  }

  .icon--wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
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
          <FrontpageHero />
          <TechnologiesWrapper>
            <div className="content--wrapper">
              <h1>Freelance Web Developer and Designer</h1>
              <h3>
                Building progressive, responsive, mobile web apps with the best
                technologies.
              </h3>
              <div className="icon--wrapper">
                <Icon name="react-full" />
                <Icon name="gatsby-full" />
                <Icon name="graphql-full" />
                <img src={NodeIcon} />
                <img src={LaravelIcon} />
              </div>
            </div>
          </TechnologiesWrapper>
          {/* <div className=" Frontpage__about pt2">
            <div className="Frontpage__avatar col-sm-4">
              <Img fluid={data.file.childImageSharp.fluid} />
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
          </div> */}

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
                      poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817179/crbaucom-images/sprayAnna.jpg"
                      src="https://res.cloudinary.com/crbaucom/video/upload/v1543816933/videos/sprayAnnaKillington.mp4"
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
    file(relativePath: { eq: "avatar-face-400px.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
          tracedSVG
          aspectRatio
          src
          srcSet
        }
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
