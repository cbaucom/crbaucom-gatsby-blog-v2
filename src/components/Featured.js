import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import nicetime from '../helpers/nicetime'
import arrowRight from '../assets/img/icon-arrow-right.svg'

export default props => {
  const links = {
    blog: 'Read article',
    portfolio: 'View project',
  }
  let featured = props.post
  const currentDate = new Date()
  let postDate = new Date(featured.frontmatter.date)

  return (
    <figure className="Featured container">
      <div className="image">
        <Img sizes={featured.frontmatter.cover_image.childImageSharp.fluid} />
      </div>
      <figcaption>
        <Link
          to={featured.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <h2 className="Title">{featured.frontmatter.title}</h2>
        </Link>
        <aside className="meta">
          <Link to={featured.fields.slug} className="Link">
            {featured.frontmatter.section
              ? links[featured.frontmatter.section]
              : 'Read article'}
            <img src={arrowRight} className="icon arrow right" />
          </Link>
          <span className="date">{nicetime(currentDate, postDate)}</span>
        </aside>
      </figcaption>
    </figure>
  )
}
