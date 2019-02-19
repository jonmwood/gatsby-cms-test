import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"
import styled from 'styled-components'
import Subtitle from './Subtitle'
import SermonSeriesCard from './SermonSeriesCard'
import { FaTorah, FaBook, FaHome, FaScroll, FaGavel, FaBookOpen, FaBible, FaCrown, FaHeart, FaGlobeAfrica } from 'react-icons/fa'
import { media } from '../utilities/MediaQueries'

const SermonsContainer = styled.div`
    display: flex;
`

const SubtitleContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledTabPanel = styled(TabPanel)`
`
const Category = styled.div`

`

// Will need to review github issue to use this Higher Order Component Example in order to be able to have multiple queries in the same file

const withData = (WrappedComponent) = (
    (props) =>
        <StaticQuery query={SERMON_ARCHIVE} render={(data) =>
            <WrappedComponent {...props} data={data} />
        } />
)

export const MyFirstQuery = withData(({ data, ...props }) => (
    <div>hello world</div>
));

export const MySecondQuery = withData(({ data, ...props }) => (
    <div>hello world</div>
));




export default class TabsController extends React.Component {
    render() {

        return (
            <Tabs>
                <TabList>
                    <Tab><h3>Old Testament</h3></Tab>
                    <Tab><h3>New Testament</h3></Tab>
                    <Tab><h3>Topical</h3></Tab>
                    <Tab><h3>Appendices</h3></Tab>
                    <Tab><h3>Miscellaneous</h3></Tab>
                </TabList>

                <StyledTabPanel className="OT">
                    <Category>
                        <SubtitleContainer className="">
                            <FaTorah className="icon" />
                            <Subtitle text="The Pentateuch" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'OT-Pentateuch'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />


                        </SermonsContainer>
                    </Category>

                    <Category>
                        <SubtitleContainer className="">
                            <FaBook className="icon" />
                            <Subtitle text="The History of Israel" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            {/* map filtered sermons here */}
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'OT-History'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                    <Category>
                        <SubtitleContainer className="">
                            <FaScroll className="icon" />
                            <Subtitle text="The Pre-Exilic Prophets - Warnings on the Fall of Israel & Judah" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            {/* map filtered sermons here */}
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'OT-Pre-Exilic'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                    <Category>
                        <SubtitleContainer className="">
                            <FaGavel className="icon" />
                            <Subtitle text="The Exilic & Post-Exilic Books - The Promise of God's Judgement and Israel's Restoration" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            {/* map filtered sermons here */}
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'OT-Exilic'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                    <Category>
                        <SubtitleContainer className="">
                            <FaBookOpen className="icon" />
                            <Subtitle text="The Wisdom Books" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            {/* map filtered sermons here */}
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'OT-Wisdom'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                </StyledTabPanel>
                <StyledTabPanel>
                    <Category>
                        <SubtitleContainer className="">
                            <FaBible className="icon" />
                            <Subtitle text="The Gospels & Acts" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'NT-Gospels'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        )))}
                            />
                        </SermonsContainer>
                    </Category>
                    <Category>
                        <SubtitleContainer className="">
                            <FaGlobeAfrica className="icon" />
                            <Subtitle text="The Pauline Epistles" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'NT-Pauline-Epistles'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                    <Category>
                        <SubtitleContainer className="">
                            <FaHeart className="icon" />
                            <Subtitle text="The General Epistles" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'NT-General-Epistles'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                    <Category>
                        <SubtitleContainer className="">
                            <FaCrown className="icon" />
                            <Subtitle text="The Apocalypse" />
                        </SubtitleContainer>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'NT-Apocalypse'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                </StyledTabPanel>
                <StyledTabPanel>
                    <Category>
                        <SermonsContainer>
                            <MyFirstQuery />
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'Topical'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                </StyledTabPanel>
                <StyledTabPanel>
                    <Category>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'Appendices'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                </StyledTabPanel>
                <StyledTabPanel>
                    <Category>
                        <SermonsContainer>
                            <StaticQuery
                                query={SERMON_ARCHIVE}
                                render={({ allMarkdownRemark }) => (
                                    allMarkdownRemark.edges.filter((edge) => {
                                        return edge.node.frontmatter.category == 'Misc'
                                    })
                                        .map((edge, index) => (
                                            <SermonSeriesCard
                                                key={edge.node.fields.slug}
                                                index={index}
                                                link={edge.node.fields.slug} imgInfo={edge.node.frontmatter} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.seriesSubtitle}
                                                seriesLength={edge.node.frontmatter.seriesLength} />
                                        ))
                                )}
                            />
                        </SermonsContainer>
                    </Category>
                </StyledTabPanel>
            </Tabs>
        )
    }

}

const SERMON_ARCHIVE = graphql`
    query SermonArchiveQuery {
                    allMarkdownRemark(
                        limit: 1000,
            filter: {
                    frontmatter: {templateKey: {eq: "sermon-series"}}
}
            sort: {
                    order: DESC,
fields: [frontmatter___date]
        }) {
                    edges {
                node {
                    fields {
                slug
            }
                    frontmatter {
                    title
                        seriesSubtitle
                seriesLength
                date
                category
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