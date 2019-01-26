import React, { Component } from 'react'
import TemplateWrapper from '../utilities/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styled from 'styled-components'
import { StyledHTML } from '../components/Content';



const sermonImageStyle = {
    'borderRadius': '5px',
    'width': '20vw',
    'height': '20vw',
    'margin': '0 auto'
}


const StyledDate = styled.p`
    font-weight: 700;
    color: #555;
`


export default class Sermon extends Component {
    render() {
        const { markdownRemark } = this.props.data
        return (
            <div>
                <TemplateWrapper>
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <StyledDate>{markdownRemark.frontmatter.date}</StyledDate>
                    <StyledHTML content={markdownRemark.html} />
                    <PreviewCompatibleImage imageInfo={markdownRemark.frontmatter} imageStyle={sermonImageStyle} />


                </TemplateWrapper>
            </div>
        )
    }
}


export const query = graphql`
    query SingleSermonQuery($slug: String!) {
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