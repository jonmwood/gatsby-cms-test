import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


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
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const ListingPreviewImageStyle = {
    'borderRadius': '5px',
    'width': '10vw',
    'height': '10vw',
}


const Listing = () => {
    return (
        <StaticQuery
            query={LISTING_QUERY}
            render={({ allMarkdownRemark }) => (
                allMarkdownRemark.edges.map(edge => (
                    <article key={edge.node.fields.slug}>
                        <Link to={edge.node.fields.slug}><h2>{edge.node.frontmatter.title}</h2></Link>
                        <p>{edge.node.frontmatter.date}</p>
                        <PreviewCompatibleImage imageInfo={edge.node.frontmatter} imageStyle={ListingPreviewImageStyle} />
                        <p>{edge.node.excerpt}</p>
                        <Link to={edge.node.fields.slug}>Read More</Link>
                    </article>
                ))
            )}
        />
    )
}

export default Listing
