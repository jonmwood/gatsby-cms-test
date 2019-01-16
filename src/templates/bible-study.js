import React, { Component } from 'react'
import TemplateWrapper from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styled from 'styled-components'

// Static Query
// used anywhere, doesn't accept variables/parameters, can't use context


// Page Query
// Must be used on pages

const bibleStudyImageStyle = {
    'borderRadius': '5px',
    'width': '20vw',
    'height': '20vw',
    'margin': '0 auto'
}



export default class BibleStudy extends Component {
    render() {
        const { markdownRemark } = this.props.data
        return (
            <div>
                <TemplateWrapper>
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <p>{markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{
                        __html: markdownRemark.html
                    }} />
                    <PreviewCompatibleImage imageInfo={markdownRemark.frontmatter} imageStyle={bibleStudyImageStyle} />

                </TemplateWrapper>
            </div>
        )
    }
}


export const query = graphql`
    query SingleBibleStudyQuery($slug: String!) {
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }) {
            fields {
                slug
            }
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
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
`