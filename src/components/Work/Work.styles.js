import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const WorkSection = styled.section`
  color: hsl(0, 0%, 98%);
  margin: 0 2rem;
`

export const WorkContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 7rem 4.5rem;
  background: url('./images/bg-pattern-how-we-work-mobile.svg') no-repeat top
      right,
    hsl(256, 26%, 20%);

  // 960px
  @media screen and (min-width: 60em) {
    flex-direction: row;
    justify-content: space-between;
    padding: 7.5rem;

    background: url('./images/bg-pattern-how-we-work-desktop.svg') no-repeat top
        right/contain,
      hsl(256, 26%, 20%);
  }

  ${Container}
`

export const WorkHeading = styled.h1`
  font-size: 3.95rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 4.5rem;

  // 960px
  @media screen and (min-width: 60em) {
    font-size: 5.5rem;
    max-width: 48rem;
    margin-bottom: 0;
    text-align: left;
  }
`
