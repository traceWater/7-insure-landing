import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const Nav = styled.nav`
  width: 100%;
  height: 8rem;
`

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;

  ${Container}
`

export const NavLogo = styled.img`
  cursor: pointer;
`

export const NavMobileIcon = styled.img`
  display: none;
  cursor: pointer;

  // 899px
  @media screen and (max-width: 56.1875em) {
    display: flex;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 1px;
  z-index: 999;
  transition: left 300ms ease;

  // 899px
  @media screen and (max-width: 56.1875em) {
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    top: 8rem;
    width: 100%;
    height: calc(100% - 8rem);
    padding-top: 2rem;
    left: ${({ click }) => (click ? '0' : '-100%')};
    overflow: ${({ click }) => (click ? 'hidden' : 'auto')};
    background: url('./images/bg-pattern-mobile-nav.svg') no-repeat 50% 175% /
        contain,
      hsl(270, 9%, 17%);
  }

  // 700px
  @media screen and (max-width: 43.75em) {
    background: url('./images/bg-pattern-mobile-nav.svg') no-repeat 50% 130% /
        contain,
      hsl(270, 9%, 17%);
  }

  // 550px
  @media screen and (max-width: 34.375em) {
    background: url('./images/bg-pattern-mobile-nav.svg') no-repeat 50% 100% /
        contain,
      hsl(270, 9%, 17%);
  }
`

export const NavItem = styled.li`
  color: hsl(273, 4%, 51%);
  padding: 0 1.4rem;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    color: hsl(273, 4%, 5%);
  }

  // 899px
  @media screen and (max-width: 56.1875em) {
    width: 100%;
    color: hsl(0, 0%, 98%);
    padding: 2.5rem;
    font-size: 1.6rem;

    &:hover {
      color: hsl(0, 0%, 70%);
    }
  }

  &:nth-child(3) {
    // 899px
    @media screen and (max-width: 56.1875em) {
      padding-bottom: 1rem;
    }
  }
`
