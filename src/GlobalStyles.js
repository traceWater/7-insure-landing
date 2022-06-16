import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, 
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 ,h6 {
    font-family: 'DM Serif Display', 'Helvetica', serif;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  button {
    font-family: inherit;
  }

  body {
    font-family: 'Karla', 'Helvetica', sans-serif; 
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: white;
    min-width: 26rem;
  }
`

export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2.5rem;
`

export const Button = styled.button`
  padding: ${({ block }) => (block ? '2rem 2.75rem' : '1rem 2.75rem')};
  background-color: transparent;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${({ block }) => block && '100%'};
  font-weight: 700;
  font-size: ${({ block }) => (block ? '1.6' : '1.3')}rem;
  width: ${({ block }) => block && '100%'};
  color: ${({ primary }) => (primary ? 'hsl(270, 9%, 17%)' : 'white')};
  border: 2px solid
    ${({ primary }) => (primary ? ' hsl(270, 9%, 17%)' : ' white')};
  cursor: pointer;
  letter-spacing: 1px;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({ primary }) =>
      primary ? 'hsl(270, 9%, 17%)' : 'white'};
    color: ${({ primary }) => (primary ? 'white' : 'hsl(270, 9%, 17%)')};
  }
`

export default GlobalStyles
