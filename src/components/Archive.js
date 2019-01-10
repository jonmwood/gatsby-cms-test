import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"


// pull query outside of component
const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
        allMarkdownRemark(limit: 5, 
            filter: {
                frontmatter: {templateKey: {eq: "bible-study"}}
            }
            sort: {
            order:DESC
            fields: [frontmatter___date]
        }) {
            edges {
            node {
                html
                frontmatter {
                title
                slug
                }
            }
            }
        }
    }
`
const Archive = () => (
    <StaticQuery
        query={POST_ARCHIVE_QUERY}
        render={({ allMarkdownRemark }) => (
            <>
                <aside>
                    <h3>Archive</h3>
                    <ul>
                        {allMarkdownRemark.edges.map(edge => (
                            <li key={edge.node.frontmatter.slug}>
                                <Link to={`/bible-studies${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </>
        )}
    />
)

export default Archive