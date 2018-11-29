import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import nicetime from '../helpers/nicetime'

import arrowRight from '../assets/img/icon-arrow-right.svg'

export default props => {
  const links = {
    blog: 'Read article',
    project: 'View project',
  }
  let postLoop
  const currentDate = new Date()

  if (props.loop !== undefined) {
    postLoop = props.loop
      .filter(({ node }) => {
        if (props.skip === true) {
          return props.loop[0].node !== node
        } else {
          return node
        }
      })
      .map(({ node }) => {
        let postDate = new Date(node.frontmatter.date)
        return (
          <section className="col-md-6 pb2" key={node.id}>
            <article className="Card small">
              <figure>
                <Link to={node.fields.slug}>
                  {node.frontmatter.cover_image.childImageSharp ? (
                    <Img
                      sizes={node.frontmatter.cover_image.childImageSharp.fluid}
                    />
                  ) : (
                    <img src={node.frontmatter.cover_image.publicURL} />
                  )}
                </Link>
              </figure>
              <div className="content">
                <Link
                  to={node.fields.slug}
                  css={{ textDecoration: `none`, color: `inherit` }}
                >
                  <h3 className="Title">{node.frontmatter.title}</h3>
                </Link>
                {/* <p className="excerpt">{node.frontmatter.description}</p> */}

                <aside className="meta">
                  <Link to={node.fields.slug} className="Link">
                    {node.frontmatter.section
                      ? links[node.frontmatter.section]
                      : 'Read article'}
                    <img src={arrowRight} className="icon arrow right" />
                  </Link>
                  <span className="date">
                    {nicetime(currentDate, postDate)}
                  </span>
                </aside>
              </div>
            </article>
          </section>
        )
      })
  }
  return <section className="container row">{postLoop}</section>
}
