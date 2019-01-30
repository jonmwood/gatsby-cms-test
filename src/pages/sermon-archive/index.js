import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../utilities/Layout'
import { FaHome, FaBeer } from 'react-icons/fa';
import Subtitle from '../../components/Subtitle';
import SermonCard from '../../components/SermonCard';
import styled from 'styled-components'
import TabsController from '../../components/Tabs'
import { media } from '../../utilities/MediaQueries'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

// const Tabs = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     max-width: 500px;
//     justify-items: center;
//     margin: 0 auto;
// `

// const Tab = styled(Link)`
//     color: ${props => props.active ? "red" : "#333"};
//     font-weight: ${props => props.active ? 700 : 400};
//     border-bottom: ${props => props.active ? "2px solid red" : null};
// `;

// const SubtitleWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     margin: 0 auto 12px auto;
//     &:last-child {
//     margin-bottom: 0;
//     }
// `

// const Icon = styled.span`
//     margin-top: 15px;
//     margin-right: 20px;
// `

// const Subtitle = styled.h3`
//     font-weight: 400;
// `

const SermonsContainer = styled.div`
    display: flex;
`

const SERMON_ARCHIVE_QUERY = graphql`
    query SermonArchive {
        allMarkdownRemark(
            limit: 100, 
            filter: {
                frontmatter: {templateKey: {eq: "sermon-series"}}
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
                        seriesSubtitle
                        seriesLength
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




const ListWrapper = styled.div`
    display: grid;
    width: 90%;
    margin: 0 auto;

    ${media.desktop`
        width: 75%;
    `}
`

const SermonSeries = styled.article`
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





export default class SermonsPage extends React.Component {

    render() {
        // const { data } = this.props
        // const { edges: posts } = data.allMarkdownRemark

        return (
            <Layout>
                <ListWrapper>
                    <section className="section">
                        <h1 className="">Sermon Archive</h1>
                        <TabsController></TabsController>
                    </section>
                    <StaticQuery
                        query={SERMON_ARCHIVE_QUERY}
                        render={({ allMarkdownRemark }) => (
                            allMarkdownRemark.edges.map((edge, index) => (
                                <SermonSeries key={edge.node.fields.slug} index={index} color="">
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
                                </SermonSeries>
                            ))
                        )}
                    />
                </ListWrapper>
            </Layout>

        )
    }
}

SermonsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

