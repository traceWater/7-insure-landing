import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const InfoSection = styled.section``

export const InfoContainer = styled(Container)`
  padding: 19rem 2rem 14.5rem;
  text-align: center;

  ${Container};

  // 960px
  @media screen and (min-width: 60em) {
    text-align: left;
    margin-top: 12rem;
  }
`

export const InfoHeading = styled.h1`
  position: relative;
  font-size: 4.75rem;
  font-weight: 400;
  color: hsl(270, 9%, 17%);

  // 960px
  @media screen and (min-width: 60em) {
    font-size: 5.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 15rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: hsl(256, 26%, 40%);
    top: -4.5rem;

    // 960px
    @media screen and (min-width: 60em) {
      left: 0;
      transform: translateX(0);
    }
  }
`

export const InfoCards = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  // 960px
  @media screen and (min-width: 60em) {
    flex-direction: row;
  }
`

export const InfoCard = styled.div`
  margin-top: 6.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 33rem;

  // 960px
  @media screen and (min-width: 60em) {
    margin-top: 4rem;
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
`

export const InfoCardImage = styled.img`
  cursor: pointer;
`

export const InfoCardTitle = styled.h2`
  margin-top: 4rem;
  color: hsl(270, 9%, 17%);
`

export const InfoCardDescription = styled.p`
  margin-top: 2rem;
  color: hsl(273, 4%, 65%);
  line-height: 1.6;
  font-weight: 700;
`
