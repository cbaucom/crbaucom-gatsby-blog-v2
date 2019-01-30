import React from 'react'
import styled from 'styled-components'

import programmerGraphic from '../assets/img/cb_undraw_programming_edit1.svg'
import bg from '../assets/img/pattern-eee-sm.png'

const HeroWrapper = styled.div`
  justify-content: center;
  background: linear-gradient(
      rgba(148,186,233,1),
      rgba(255, 255, 255, 0.0165)
    ),
    url(${bg}) center;
  /* background: linear-gradient(
    rgba(148,186,233,1.065), rgba(255,255,255,0.965)
  ),
  url(${bg}) center; */
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
