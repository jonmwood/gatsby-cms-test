const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          slug: edge.node.frontmatter.slug,
        },
      })
    })

    // Bible Study pages:
    // let bibleStudies = []
    // // Iterate through each post, putting all found bible studies into `bibleStudies`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.templateKey`) === "bible-study") {
    //     bibleStudies = bibleStudies.concat(edge.node)
    //   }
    // })
    // // Eliminate duplicate tags
    // bibleStudies = _.uniq(bibleStudies)

    // // Make bible study pages
    // bibleStudies.forEach(bibleStudy => {
    //   const bibleStudyPath = `/bible-studies${node.frontmatter.slug}`

    //   createPage({
    //     path: bibleStudyPath,
    //     component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
    //     context: {
    //       slug: node.frontmatter.slug
    //     },
    //   })
    // })



    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
