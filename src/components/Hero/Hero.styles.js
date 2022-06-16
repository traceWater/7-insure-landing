import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const HeroSection = styled.section`
  background-color: hsl(256, 26%, 20%);
  color: white;
  line-height: 1.1;
  position: relative;
  z-index: 100;
`

export const HeroContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Container};
  padding: 0;

  // 768px
  @media screen and (min-width: 48em) {
    flex-direction: row;
    height: 60rem;
  }
`

export const HeroImage = styled.div`
  height: 45rem;
  width: 100%;
  background: url('./images/image-intro-mobile.jpg') no-repeat center
    center/cover;

  // 600px
  @media screen and (min-width: 37.5em) {
    background: url('./images/image-intro-mobile.jpg') no-repeat 50% 30% / cover;
  }

  // 768px
  @media screen and (min-width: 48em) {
    order: 2;
    height: 100%;
    width: 100%;
    background: url('./images/image-intro-desktop.jpg') no-repeat center
      center/cover;
    transform: translateY(7rem);
    margin-right: 4rem;
  }

  // 960px
  @media screen and (min-width: 60em) {
    transform: translateY(13rem);
  }
`

export const HeroShowcaseText = styled.div`
  padding: 10rem 0;
  margin: 0 2.5rem 0;
  text-align: center;
  background-color: hsl(256, 26%, 20%);

  // 768px
  @media screen and (min-width: 48em) {
    text-align: left;
    max-width: 32rem;
  }

  // 960px
  @media screen and (min-width: 60em) {
    max-width: 53rem;
  }
`

export const HeroShowcaseHeading = styled.h1`
  position: relative;
  font-weight: 400;
  font-size: 4.5rem;

  // 960px
  @media screen and (min-width: 60em) {
    line-height: 0.9;
    font-size: 7rem;
  }

  &::before {
    // 768px
    @media screen and (min-width: 48em) {
      content: '';
      position: absolute;
      left: 0;
      top: -6rem;
      height: 1px;
      width: 15rem;
      background-color: hsl(0, 0%, 98%);
    }
  }
`

export const HeroShowcaseSubtitle = styled.p`
  line-height: 1.7;
  color: hsl(0, 0%, 90%);
  margin: 2rem auto 4rem;

  // 960px
  @media screen and (min-width: 60em) {
    margin-top: 3rem;
  }
`

export const HeroBgPatternLeft = styled.div`
  position: absolute;
  top: 45rem;
  left: 0;
  width: 17.5rem;
  height: 17.5rem;
  overflow: hidden;
  background: url('./images/bg-pattern-intro-left-mobile.svg') no-repeat top
    left/cover;

  // 768px
  @media screen and (min-width: 48em) {
    width: 20rem;
    height: 50rem;
    background: url('./images/bg-pattern-intro-left-desktop.svg') no-repeat;
  }
`

export const HeroBgPatternRight = styled.div`
  position: absolute;
  bottom: -20%;
  right: 0;
  width: 13.5rem;
  height: 38%;
  overflow: hidden;
  background: url('./images/bg-pattern-intro-right-mobile.svg') no-repeat bottom
    right/ contain;

  // 768px
  @media screen and (min-width: 48em) {
    width: 30rem;
    height: 90%;
    right: 0;
    top: 0;
    background: url('./images/bg-pattern-intro-right-desktop.svg') no-repeat top
      right/ contain;
  }

  // 1300px
  @media screen and (min-width: 81.25em) {
    width: 45rem;
    height: 88%;
  }
`
