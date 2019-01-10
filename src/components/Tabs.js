import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"
import styled from 'styled-components'
import Subtitle from './Subtitle'
import SermonCard from './SermonCard'
import { FaHome } from 'react-icons/fa'

const SermonsContainer = styled.div`
    display: flex;
`

const SubtitleContainer = styled.div`
    display: flex;
    align-items: center;
`

const TabsController = (props) => {
    return (
        <Tabs>
            <TabList>
                <Tab><h3>Old Testament</h3></Tab>
                <Tab><h3>New Testament</h3></Tab>
                <Tab><h3>Topical</h3></Tab>
            </TabList>

            <TabPanel>
                <SubtitleContainer className="">
                    <FaHome className="icon" />
                    <Subtitle text="The Pentateuch" />
                </SubtitleContainer>
                <SermonsContainer>
                    <SermonCard />
                    <SermonCard />
                    <SermonCard />
                    <SermonCard />
                </SermonsContainer>
            </TabPanel>
            <TabPanel>
                <SubtitleContainer className="">
                    <FaHome className="icon" />
                    <Subtitle text="The Gospels & Acts" />
                </SubtitleContainer>
                <SermonsContainer>
                    <SermonCard />
                    <SermonCard />
                    <SermonCard />
                    <SermonCard />
                </SermonsContainer>
                <SubtitleContainer className="">
                    <FaHome className="icon" />
                    <Subtitle text="The Pauline Epistles" />
                </SubtitleContainer>
                <SermonsContainer>
                    <SermonCard />
                    <SermonCard />
                    <SermonCard />
                    <SermonCard />
                </SermonsContainer>
            </TabPanel>
        </Tabs>
    )
}


export default TabsController