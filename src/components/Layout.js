import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/Navbar'
import './all.sass'
import Archive from './Archive'


import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900');
  font-family: 'Nunito Sans';
  font-size: 18px;
  color: #333333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: goldenrod;
    }

  
`


const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
              author,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="author" content={data.site.siteMetadata.author} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="" sizes="16x16" />

          <link rel="mask-icon" href="" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>

        <GlobalStyle />
        <Navbar />

        <div>
          {children}
        </div>
        <Archive />
      </div>
    )}
  />
)

export default TemplateWrapper
