import { useState, useEffect } from 'react'

import { Nav, NavContainer, NavLogo, NavMobileIcon, NavMenu, NavItem,} from './Navbar.styles'
import { Button } from '../../GlobalStyles'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [block, setBlock] = useState(false)

  useEffect(() => { if (window.innerWidth < 900) { setBlock(true) } else { setClick(false) }
                      if (window.innerWidth < 900 && click) {
                            document.body.style.overflow = 'hidden'
                      } else {document.body.style.overflow = 'auto'}}, [click])

  const handleClick = () => setClick(!click)

  const displayBtnBlock = () => { if (window.innerWidth < 900) {
      setBlock(true)
    } else {
      setBlock(false)
    }
  }

  window.addEventListener( 'resize', displayBtnBlock )

  return (
    <Nav>
      <NavContainer>
        <NavLogo src="./images/logo.svg" alt="Logo"></NavLogo>
           {click ? (
          <NavMobileIcon src="./images/icon-close.svg" alt="Close icon" onClick={ handleClick }></NavMobileIcon>
            ) : (
          <NavMobileIcon src="./images/icon-hamburger.svg"alt="Hamburger icon" onClick={ handleClick }></NavMobileIcon>
            )}
          <NavMenu onClick={handleClick} click={click}>
          <NavItem>HOW WE WORK</NavItem>
          <NavItem>BLOG</NavItem>
          <NavItem>ACCOUNT</NavItem>
          <NavItem>
            {block ? (
              <Button block={block}>VIEW PLANS</Button>
            ) : (
              <Button primary block={block}>
                VIEW PLANS
              </Button>
            )}
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
