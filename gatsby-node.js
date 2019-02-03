const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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
                  frontmatter {
                    section
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

        let blogCount = 0
        let projectCount = 0

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

          if (post.node.frontmatter.section === 'project') {
            projectCount++
          } else if (post.node.frontmatter.section === 'blog') {
            blogCount++
          }

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

        const postsPerPage = 4
        const numBlogPages = Math.ceil(blogCount / postsPerPage)
        const numProjectPages = Math.ceil(projectCount / postsPerPage)
        Array.from({ length: numBlogPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve('./src/templates/blog-archive.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              pageNumber: i,
              pageCount: numBlogPages,
              pathPrefix: 'blog',
              section: 'blog',
            },
          })
        })

        Array.from({ length: numProjectPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/projects` : `/projects/${i + 1}`,
            component: path.resolve('./src/templates/blog-archive.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              pageNumber: i,
              pageCount: numProjectPages,
              pathPrefix: 'projects',
              section: 'project',
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
      })
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
