import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../utilities/Layout'
import { FaHome, FaBeer } from 'react-icons/fa';
import Subtitle from '../../components/Subtitle';
import SermonCard from '../../components/SermonCard';
import styled from 'styled-components'
import TabsController from '../../components/Tabs'


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

export default class SermonsPage extends React.Component {

    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <Layout>
                <section className="section">
                    <h1 className="">Sermon Archive</h1>
                    <TabsController></TabsController>
                </section >
            </Layout >
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

export const pageQuery = graphql`
query SermonArchiveQuery {
                    allMarkdownRemark(
                        sort: {order: DESC, fields: [frontmatter___date] },
        filter: {frontmatter: {templateKey: {eq: "blog-post" } } }
    ) {
                    edges {
                node {
                    excerpt(pruneLength: 400)
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    templateKey
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
}
}
`
