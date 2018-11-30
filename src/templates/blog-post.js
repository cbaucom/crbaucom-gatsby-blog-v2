import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import nicetime from '../helpers/nicetime'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/Layout'

// import ReadingProgress from '../components/ReadingProgress'
import SEO from '../components/SEO'
import Cover from '../components/Cover'
import Comments from '../components/Comments'
import PostLoop from '../components/PostLoop'
import Twitter from '../components/icons/Twitter'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const skip = false
    const post = this.props.data.blog
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    let related
    this.props.data.relatedPosts
      ? (related = this.props.data.relatedPosts.edges)
      : (related = null)
    const currentDate = new Date()

    const tags = post.frontmatter.tags.map(tag => (
      <li key={tag}>
        <Link to={'/tags/' + kebabCase(tag)}>#{tag}</Link>
      </li>
    ))

    let postImage = post.frontmatter.cover_image.publicURL
    let postDate = new Date(post.frontmatter.date)

    if (post.frontmatter.cover_image.childImageSharp !== null) {
      postImage =
        post.frontmatter.cover_image.childImageSharp &&
        post.frontmatter.cover_image.childImageSharp.fluid &&
        post.frontmatter.cover_image.childImageSharp.fluid.src
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div className="Blog">
          {/*----- Reading progress only on blog -----*/}
          {/* {post.frontmatter.section === 'blog' &&
          <ReadingProgress targetEl="#Article" />
        } */}
          <SEO
            key={`seo-${post.fields.slug}`}
            postImage={postImage}
            postData={post}
            isBlogPost
          />
          <article
            id="Article"
            className={'ArticlePage ' + post.frontmatter.section}
          >
            {/*----- Cover image only on blog -----*/}
            {post.frontmatter.section === 'blog' && (
              <Cover image={post.frontmatter.cover_image} />
            )}
            <section className="container">
              {/*----- Post content -----*/}
              <section className="content">
                <h1 className="Title">{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>

                {/* <span className="date">
                  Originally Posted:
                  {nicetime(currentDate, postDate)}
                </span> */}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link
                        to={previous.fields.slug}
                        rel="prev"
                        className="btn white"
                      >
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link
                        to={next.fields.slug}
                        rel="next"
                        className="btn white"
                      >
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>

                {/*----- Share on twitter -----*/}
                <aside className="meta">
                  <section className="share">
                    <a
                      href={`http://twitter.com/share?text=Check this out&url=https://crbaucom.com${
                        post.fields.slug
                      }&hashtags=${post.frontmatter.tags}`}
                      className="twitter"
                    >
                      {post.frontmatter.section === 'blog'
                        ? 'Share on Twitter'
                        : 'Share'}
                      <Twitter />
                    </a>
                  </section>
                </aside>

                <aside className="TagCloud small">
                  <ul>{tags}</ul>
                </aside>
              </section>
            </section>
          </article>

          {post.frontmatter.section === 'blog' && <Comments post={post} />}

          {related ? (
            <nav className="RelatedPosts container">
              <h3 className="Title">Related Articles</h3>
              <PostLoop loop={related} skip={skip} />
            </nav>
          ) : (
            ''
          )}
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1240) {
              tracedSVG
              src
              srcSet
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
        tags
        section
      }
      fields {
        slug
      }
    }
    relatedPosts: allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  src
                  srcSet
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
