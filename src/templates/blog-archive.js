import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import capitalizeFirstLetter from '../helpers/uppercase'
import PostLoop from '../components/PostLoop'
import Layout from '../components/Layout'

const NavLink = props => {
  if (!props.test) {
    return (
      <Link to={props.url} className="btn">
        {props.text}
      </Link>
    )
  } else {
    return <span className="btn disabled gray">{props.text}</span>
  }
}

const IndexPage = ({ data, pageContext }) => {
  const { pageNumber, pageCount, pathPrefix } = pageContext
  const previousUrl =
    pageNumber - 1 == 0
      ? '/' + pathPrefix + '/'
      : '/' + pathPrefix + '/' + pageNumber.toString()
  const nextUrl = '/' + pathPrefix + '/' + (pageNumber + 2).toString()
  const first = pageNumber === 0
  const last = pageNumber === pageCount - 1

  return (
    <Layout>
      <div className="BlogArchive">
        <header className="container Title">
          <h1>{capitalizeFirstLetter(pathPrefix)} archive</h1>
          <h4 className="Title__sub">Page {pageNumber + 1}</h4>
        </header>

        <PostLoop loop={data.allMarkdownRemark.edges} />

        <nav className="Pagination container">
          <div className="prev">
            <NavLink test={first} url={previousUrl} text="Previous Page" />
          </div>
          <div className="next">
            <NavLink test={last} url={nextUrl} text="Next Page" />
          </div>
        </nav>
      </div>
    </Layout>
  )
}
export default IndexPage

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $section: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { section: { eq: $section } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            section
          }
        }
      }
    }
  }
`
