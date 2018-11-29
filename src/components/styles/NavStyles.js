import styled from 'styled-components'

const NavStyles = styled.div`
  margin-top: -4rem;
  font-size: 1.15rem;
  float: right;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: end;
    font-size: 1rem;
  }
  li {
    display: inline;
    letter-spacing: 0.1rem;
    /* margin: 0 1rem; */
    font-weight: 400;
    font-size: 1.25rem;
  }
  a,
  button {
		color: white;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    position: relative;
		text-transform: uppercase;
		text-shadow: none;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 0.75rem;
      padding: 16px 10px;
    }
    /* &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    } */
    &:after {
      height: 2px;
      background: ${props => props.theme.navy};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 40px);
      }
    }
  }
  @media (max-width: 1300px) {
    /* border-top: 1px solid ${props => props.theme.lightgrey}; */
    /* width: 100%;
    justify-content: center; */
    /* font-size: 1.5rem; */
  }
`

export default NavStyles
