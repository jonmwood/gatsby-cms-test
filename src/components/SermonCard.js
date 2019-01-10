import React from 'react'
import styled from 'styled-components'
import Matthew from '../img/Sermon_Matthew_square.jpg'



// const CardContainer = styled.div`
//     display: flex;
// `

const SermonCover = styled.img`
    min-width: 128px;
    max-width: 228px;
`

const SermonCard = (props) => {

    return (
        <div class="level">
            <figure class="level-left image">
                <SermonCover src={Matthew} alt="Image of Sermon Series" class="level-item" />
            </figure>
            <div class="level-right">
                <div class="">
                    <h3 class="level-item">Matthew</h3>
                    <p class="level-item">Jesus, King of the Jews</p>
                    <span class="level-item">
                        <p>39 weeks</p>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default SermonCard
