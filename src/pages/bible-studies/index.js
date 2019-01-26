import React from 'react'
import TemplateWrapper from '../../utilities/Layout';
import { Link, StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { media } from '../../utilities'



const BIBLE_STUDY_LIST_QUERY = graphql`
    query BibleStudyList {
        allMarkdownRemark(
            limit: 100, 
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



const ListWrapper = styled.div`
    display: grid;
    width: 90%;
    margin: 0 auto;

    ${media.desktop`
        width: 75%;
    `}
`

const BibleStudy = styled.article`
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
    margin: 1rem 0;

    ::after {
        content: '';
        margin: 1rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.05); 
    }
    
    
    ${media.desktop`
        flex-direction: ${props => props.index % 2 == 0 ? 'row' : 'row-reverse'};
    `}
`;





const ListingPreviewImageStyle = {
    'borderRadius': '5px',
    'width': '100%',
    'height': '100%',
}

const ImageContainer = styled.div`
    display: grid;
    width: 100%;

    ${media.desktop`
        width: 50%;
        justify-self: end;
        /* padding-right: 5rem; */
        max-height: 500px;
        max-width: 500px;
        `}
`

const ContentContainer = styled.div`
    display: grid;
    align-self: center;
    width: 100%;

    h2, p {
        color: #000;
    }

    ${media.desktop`
        width: 50%;
    `}
`




const BibleStudyPageTemplate = () => {
    return (
        <ListWrapper>
            <h1>Bible Studies</h1>

            <StaticQuery
                query={BIBLE_STUDY_LIST_QUERY}
                render={({ allMarkdownRemark }) => (
                    allMarkdownRemark.edges.map((edge, index) => (
                        <BibleStudy key={edge.node.fields.slug} index={index} color="">
                            {console.log(index)}
                            <ImageContainer>
                                <Link to={edge.node.fields.slug}>
                                    <PreviewCompatibleImage imageInfo={edge.node.frontmatter} imageStyle={ListingPreviewImageStyle} className="image" />
                                </Link>
                            </ImageContainer>
                            <ContentContainer className="content">
                                <Link to={edge.node.fields.slug}>
                                    <h2>{edge.node.frontmatter.title}</h2>

                                    <p>{edge.node.excerpt}</p>
                                </Link>
                            </ContentContainer>
                        </BibleStudy>
                    ))
                )}
            />
        </ListWrapper>
    )
}


const BibleStudiesPage = () => {
    return (
        <TemplateWrapper>
            <BibleStudyPageTemplate />
        </TemplateWrapper>
    )
}

export default BibleStudiesPage
