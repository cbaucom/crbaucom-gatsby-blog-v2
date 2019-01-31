import React from 'react'
import styled from 'styled-components'

import Icon from '../elements'
import NodeIcon from '../assets/img/nodejs-black.png'
import LaravelIcon from '../assets/img/laravel-text-logo.png'

const TechnologiesWrapper = styled.div`
  /* background: #eee; */
  background: linear-gradient(rgba(235, 235, 235, 0.9), rgba(255, 255, 255, 1));
  margin-top: -1rem;
  padding: 5rem 3rem 2rem;
  font-size: 1.5rem;
  text-align: center;
  .content--wrapper {
    width: 90vw;
    margin: 0 auto;
  }
  h1 {
    font-weight: 600;
  }
  h3 {
    font-weight: 500;
  }
  svg,
  img {
    margin: 1rem;
    height: 100%;
    align-self: center;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 2.474rem;
      margin-bottom: 2.5rem;
    }
    h3 {
      font-size: 1.74rem;
      font-weight: 500;
    }
  }
  @media (max-width: 600px) {
    padding: 3rem 1rem;
    h1 {
      font-size: 2.074rem;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: 1.44rem;
    }
  }

  .icon--wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const FrontpageHeroBlurb = () => (
  <TechnologiesWrapper>
    <div className="content--wrapper">
      <h1>Freelance Web Developer and Designer</h1>
      <h3>
        Building progressive, responsive, mobile web apps with the best
        technologies.
      </h3>
      <div className="icon--wrapper">
        <Icon name="react-full" />
        <Icon name="gatsby-full" />
        <Icon name="graphql-full" />
        <img src={NodeIcon} />
        <img src={LaravelIcon} />
      </div>
    </div>
  </TechnologiesWrapper>
)

export default FrontpageHeroBlurb
