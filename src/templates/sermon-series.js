import React, { Component } from 'react'
import TemplateWrapper from '../utilities/Layout'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styled from 'styled-components'
import { StyledHTML } from '../components/Content';
import { media } from '../utilities/MediaQueries'
import { FaLessThanEqual } from 'react-icons/fa';


const SeriesContent = styled.div`
`

const sermonSeriesImageStyle = {
    'borderRadius': '5px',
    'width': '20vw',
    'height': '20vw',
    'margin': '0 auto'
}

const SermonContent = styled.article`
`

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

const ListingPreviewImageStyle = {
    'borderRadius': '5px',
    'width': '100%',
    'height': '100%',
}

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


export default class Sermon extends Component {
    render() {
        const { SermonSeriesData } = this.props.data
        const { SpecificSermon } = this.props.data
        const matchingSermons =
            SpecificSermon.edges.filter((edge) => {
                return edge.node.frontmatter.sermonSeries == SermonSeriesData.frontmatter.sermonSeries
            })

        const hasSections = SermonSeriesData.frontmatter.seriesSections != null
        const withSections = (
            SermonSeriesData.frontmatter.seriesSections.map(section => (
                <>
                    <h2>{section.sectionTitle}</h2>
                    {matchingSermons.map((sermon, index) => (
                        sermon.node.frontmatter.sectionNumber == section.sectionNumber &&
                        <Link to={sermon.node.fields.slug} key={sermon.node.fields.slug} index={index}>
                            <h3>{sermon.node.frontmatter.title}</h3>
                            <p>{sermon.node.frontmatter.passage}</p>
                        </Link>
                    ))}
                </>
            ))
        )
        const noSections = (
            matchingSermons.map((sermon, index) => (
                <Link to={sermon.node.fields.slug} key={sermon.node.fields.slug} index={index}>
                    <h3>{sermon.node.frontmatter.title}</h3>
                    <p>{sermon.node.frontmatter.passage}</p>
                </Link>
            ))
        )


        return (
            <div>
                <TemplateWrapper>
                    <SeriesContent>
                        <h1>{SermonSeriesData.frontmatter.title}</h1>
                        <h3>{SermonSeriesData.frontmatter.seriesSubtitle}</h3>
                        <p>{SermonSeriesData.frontmatter.seriesLength} Weeks</p>
                        <StyledHTML content={SermonSeriesData.frontmatter.html} />
                        <PreviewCompatibleImage imageInfo={SermonSeriesData.frontmatter} imageStyle={sermonSeriesImageStyle} />
                        {/* ternary has to return JSX element not JS expression*/}
                        {hasSections ? <> {withSections} </> : <>{noSections}</>}

                    </SeriesContent>





                </TemplateWrapper>
            </div >
        )
    }
}


export const query = graphql`
        query CombinationQuery($slug: String!)
{
                    SermonSeriesData: markdownRemark(
            fields: {
                    slug: {
                    eq: $slug
            }
        }
            frontmatter: {
                    templateKey: {
                    eq: "sermon-series"
            }
        }
        ) {
                    fields {
                slug
            }
            id
            html
            frontmatter {
                    title
                seriesSubtitle
                seriesLength
                sermonSeries
                seriesSections {
                    sectionTitle
                    sectionNumber
                }
                image {
                    childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
        }
    }
    SpecificSermon: allMarkdownRemark(
        limit: 1000,
            filter: {
                    frontmatter: {
                    templateKey: {eq: "sermon"}
            }
        }
            sort: {
                order: ASC,
                fields: [frontmatter___date]
        }) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            sermonSeries
                            passage
                            sectionNumber
                            date
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