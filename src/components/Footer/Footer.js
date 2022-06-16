import {
  FooterSection, FooterContainer, FooterSocials, FooterSocialsContainer, FooterLogo, FooterSocialIcon, FooterLinksContainer, FooterLinks, FooterLinksTitle, FooterLinkItem,
} from './Footer.styles'

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterSocials>
          <FooterLogo src="./images/logo.svg" alt="Logo"></FooterLogo>
          <FooterSocialsContainer>
            <FooterSocialIcon src="./images/icon-facebook.svg" alt="Facebook icon"></FooterSocialIcon>
            <FooterSocialIcon src="./images/icon-twitter.svg" alt="Twitter icon"></FooterSocialIcon>
            <FooterSocialIcon src="./images/icon-pinterest.svg" alt="Pinterest icon"></FooterSocialIcon>
            <FooterSocialIcon src="./images/icon-instagram.svg" alt="Instagram icon"></FooterSocialIcon>
          </FooterSocialsContainer>
        </FooterSocials>

        <FooterLinksContainer>
          <FooterLinks>
            <FooterLinksTitle>OUR COMPANY</FooterLinksTitle>
            <FooterLinkItem>HOW WE WORK</FooterLinkItem>
            <FooterLinkItem>WHY INSURE?</FooterLinkItem>
            <FooterLinkItem>CHECK PRICE</FooterLinkItem>
            <FooterLinkItem>REVIEWS</FooterLinkItem>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksTitle>HELP ME</FooterLinksTitle>
            <FooterLinkItem>FAQ</FooterLinkItem>
            <FooterLinkItem>TERMS OF USE</FooterLinkItem>
            <FooterLinkItem>PRIVACY POLICY</FooterLinkItem>
            <FooterLinkItem>COOKIES</FooterLinkItem>
          </FooterLinks>

          <FooterLinks>
            <FooterLinksTitle>CONTACT</FooterLinksTitle>
            <FooterLinkItem>SALES</FooterLinkItem>
            <FooterLinkItem>SUPPORT</FooterLinkItem>
            <FooterLinkItem>LIVE CHAT</FooterLinkItem>
          </FooterLinks>
          
          <FooterLinks>
            <FooterLinksTitle>OTHERS</FooterLinksTitle>
            <FooterLinkItem>CAREERS</FooterLinkItem>
            <FooterLinkItem>PRESS</FooterLinkItem>
            <FooterLinkItem>LICENSES</FooterLinkItem>
          </FooterLinks>
        </FooterLinksContainer>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
