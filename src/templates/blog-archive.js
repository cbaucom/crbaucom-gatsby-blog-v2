import React, { Component } from 'react'
import { Link } from 'gatsby'
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
  const { group, index, first, last, pageCount, pathPrefix } = pageContext
  const previousUrl =
    index - 1 == 1
      ? '/' + pathPrefix + '/'
      : '/' + pathPrefix + '/' + (index - 1).toString()
  const nextUrl = '/' + pathPrefix + '/' + (index + 1).toString()

  return (
    <Layout>
      <div className="BlogArchive">
        <header className="container Title">
          <h1>{capitalizeFirstLetter(pathPrefix)} archive</h1>
          <h4 className="Title__sub">Page {index}</h4>
        </header>

        <PostLoop loop={group} />

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
