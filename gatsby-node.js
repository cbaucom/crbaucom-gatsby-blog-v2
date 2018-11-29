const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')

/**
 *  Pagination for /blog/ page
 */
function createBlogPagination(graphql, createPage, resolve, reject) {
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { section: { eq: "blog" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
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
  `).then(result => {
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/blog-archive.js',
      pageLength: 4,
      pathPrefix: 'blog',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
    })
  })
}

/**
 *  Pagination for /projects/ page
 */
function createProjectsPagination(graphql, createPage, resolve, reject) {
  graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { section: { eq: "project" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
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
  `).then(result => {
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/blog-archive.js',
      pageLength: 4,
      pathPrefix: 'projects',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
    })
  })
}

/**
 *  Create slug pages for markdown files
 *  Create pages for each tag
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  excerpt
                  frontmatter {
                    title
                    cover_image {
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
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages based on slugs.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          // Grab random tag to do related posts
          const tag =
            post.node.frontmatter.tags[
              Math.floor(Math.random() * post.node.frontmatter.tags.length)
            ]

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              tag: tag,
              previous,
              next,
            },
          })
        })

        /**
         * Create archive pages for tags
         */
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if ('tags' in node.frontmatter) {
            tags = tags.concat(node.frontmatter.tags)
          }
        })
        // _.each(posts, edge => {
        //     if (_.get(edge, "node.frontmatter.tags")) {
        //         tags = tags.concat(edge.node.frontmatter.tags);
        //     }
        // });

        // Eliminate duplicate tags
        // tags = _.uniq(tags);
        tags = tags.filter(function(item, i, ar) {
          return ar.indexOf(item) === i
        })

        // Make tag pages
        tags.forEach(tag => {
          let tagName = tag.replace(/\s+/g, '-').toLowerCase()
          createPage({
            path: `/tags/${tagName}/`,
            component: path.resolve(`./src/templates/tags.js`),
            context: {
              tag,
            },
          })
        })

        resolve()
      }),
      createBlogPagination(graphql, createPage),
      createProjectsPagination(graphql, createPage)
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
