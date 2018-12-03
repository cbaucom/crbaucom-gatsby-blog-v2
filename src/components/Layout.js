import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import config from '../config'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/styles.css'

import appleTouchIcon from '../../static/assets/favicon/apple-touch-icon.png'
import favicon32 from '../../static/assets/favicon/favicon-32x32.png'
import favicon16 from '../../static/assets/favicon/favicon-16x16.png'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  navy: '#023767',
  unc: '#94bae9',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'Lato'; }
`
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>{config.title}</title>
          <meta name="description" content={config.description} />
          <meta name="keywords" content={config.keywords} />

          <link rel="shortcut icon" href={favicon32} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <meta name="msapplication-TileColor" content="#94bae9" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Header />
        <section className="App">{this.props.children}</section>
        <Footer />
      </div>
    )
  }
}

export default Layout
