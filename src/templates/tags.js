import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

// Components
import Layout from '../components/Layout'
import PostLoop from '../components/PostLoop'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const skip = false
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with `

  return (
    <Layout>
      <header>
        <h1 className="container Title">
          #<span className="text blue">{tag}</span>{' '}
          <small className="normal smaller">({totalCount} post total)</small>
        </h1>
      </header>

      <PostLoop loop={edges} skip={skip} />

      <nav className="centered pb2">
        <Link to="/tags" className="btn">
          All tags
        </Link>
      </nav>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default props => (
  <StaticQuery
    query={graphql`
      query TagPage($tag: String) {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                description
                cover_image {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 1240) {
                      srcSet
                    }
                  }
                }
                date
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <Tags data={data} {...props} />}
  />
)
