import React from 'react'
import styled from 'styled-components'

import programmerGraphic from '../assets/img/cb_undraw_programming_edit2.svg'
import bg from '../assets/img/pattern.png'

const HeroWrapper = styled.div`
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.165),
      rgba(255, 255, 255, 0.165)
    ),
    url(${bg}) center;
  img {
    margin-bottom: 0;
  }
`

const FrontpageHero = () => (
  <HeroWrapper>
    <img src={programmerGraphic} alt="Programmer graphic" />
  </HeroWrapper>
)

export default FrontpageHero
