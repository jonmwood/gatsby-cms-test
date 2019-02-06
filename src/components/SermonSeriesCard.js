import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { media } from '../utilities/MediaQueries'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';


const SermonSeries = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    /* margin: 1rem 0; */

    ::after {
        content: '';
        margin: 1rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.05); 
    }
    
    
    ${media.desktop`
        /* flex-direction: 'row'; */
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

const SermonSeriesCard = (props) => {

    return (
        <SermonSeries>
            <ImageContainer>
                <Link to={props.link}>
                    <PreviewCompatibleImage imageInfo={props.imgInfo} imageStyle={ListingPreviewImageStyle} className="image" />
                </Link>
            </ImageContainer>
            <ContentContainer className="content">
                <Link to={props.link}>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <p>{props.seriesLength} Weeks</p>
                </Link>
            </ContentContainer>
        </SermonSeries>
    )
}

export default SermonSeriesCard
