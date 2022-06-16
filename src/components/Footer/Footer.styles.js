import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const FooterSection = styled.footer`
  margin-top: 14rem;
  background: url('./images/bg-pattern-footer-mobile.svg') no-repeat center
      top/contain,
    hsl(0, 0%, 98%);
  font-weight: 700;
  font-size: 1.4rem;
  padding: 8.8rem 2.5rem;

  // 960px
  @media screen and (min-width: 60em) {
    background: url('./images/bg-pattern-footer-desktop.svg') no-repeat top left,
      hsl(0, 0%, 98%);
    background-size: 40%;
  }
`

export const FooterContainer = styled(Container)`
  text-align: center;

  ${Container};
  padding: 0;
`

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  border-bottom: 1px solid hsl(256, 26%, 90%);

  // 960px
  @media screen and (min-width: 60em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -5.25rem;
  }
`

export const FooterSocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.2rem;
`

export const FooterLogo = styled.img`
  cursor: pointer;

  // 960px
  @media screen and (min-width: 60em) {
    align-self: flex-end;
  }
`

export const FooterSocialIcon = styled.img`
  cursor: pointer;
  transition: all 250ms ease;

  :not(:last-child) {
    margin-right: 1.5rem;
  }

  // Turn the SVG colors to black
  &:hover {
    filter: contrast(175%) brightness(3%);
  }
`

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  // 960px
  @media screen and (min-width: 60em) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;

  // 960px
  @media screen and (min-width: 60em) {
    &:not(:last-child) {
      margin-right: 16rem;
    }
  }
`

export const FooterLinksTitle = styled.li`
  margin: 4rem auto;
  color: hsl(273, 4%, 51%);
`

export const FooterLinkItem = styled.li`
  color: hsl(270, 9%, 17%);
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
