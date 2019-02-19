import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../utilities/Layout'
import { FaHome, FaBeer } from 'react-icons/fa';
import Subtitle from '../../components/Subtitle';
import styled from 'styled-components'
import TabsController from '../../components/Tabs'
import { media } from '../../utilities/MediaQueries'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';



const ListWrapper = styled.div`
    display: grid;
    width: 90%;
    margin: 0 auto;

    ${media.desktop`
        width: 75%;
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


                        {/* Simplified this page since TabsController holds most of the data, refactored and put query in that component */}
                        <TabsController></TabsController>
                    </section>
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

