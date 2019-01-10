import React, { Component } from 'react'
import TemplateWrapper from '../components/Layout'
import { graphql } from 'gatsby'

// Static Query
// used anywhere, doesn't accept variables/parameters, can't use context


// Page Query
// Must be used on pages


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
                date
                slug
            }
        }
    }
`