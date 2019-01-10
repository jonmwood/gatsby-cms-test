import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'



const LISTING_QUERY = graphql`
    query BibleStudyListing {
        allMarkdownRemark(
            limit: 15, 
            filter: {
                frontmatter: {templateKey: {eq: "bible-study"}}
            }
            sort: {
            order:DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                    }
                }
            }
        }
    }
`


const Listing = () => {
    return (
        <StaticQuery
            query={LISTING_QUERY}
            render={({ allMarkdownRemark }) => (
                allMarkdownRemark.edges.map(edge => (
                    <article key={edge.node.frontmatter.slug}>
                        <Link to={`/bible-studies${edge.node.frontmatter.slug}`}><h2>{edge.node.frontmatter.title}</h2></Link>
                        <p>{edge.node.frontmatter.date}</p>
                        <p>{edge.node.excerpt}</p>
                        <Link to={`/bible-studies${edge.node.frontmatter.slug}`}>Read More</Link>
                    </article>
                ))
            )}
        />
    )
}

export default Listing
