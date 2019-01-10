const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                slug
                            }
                        }
                    }
                }
            }
            `).then(results => {
            results.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: `/posts${node.frontmatter.slug}`,
                    tags: node.frontmatter.tags,
                    component: path.resolve(
                        `src/templates/${String(node.frontmatter.templateKey)}.js`
                    ),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                })
            })
        })
        resolve()
    })


}