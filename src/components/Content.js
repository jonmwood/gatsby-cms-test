import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'




export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content


export const StyledHTML = styled(HTMLContent)`

    h1 {
        color: blue;
    }

    .gatsby-resp-image-link {
        max-width: 500px;
        max-height: 500px;
        margin: 0 auto;
    }
`