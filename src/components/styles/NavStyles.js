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
  }
`

export default NavStyles
