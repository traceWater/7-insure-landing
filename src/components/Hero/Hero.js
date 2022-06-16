import { HeroSection, HeroContainer, HeroImage, HeroShowcaseText, HeroShowcaseHeading, HeroShowcaseSubtitle, HeroBgPatternLeft, HeroBgPatternRight,
} from './Hero.styles'
import { Button } from '../../GlobalStyles'

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroImage>
          </HeroImage>
            <HeroShowcaseText>
              <HeroShowcaseHeading>Humanizing your insurance.</HeroShowcaseHeading>
              <HeroShowcaseSubtitle>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
              </HeroShowcaseSubtitle>
              <Button>VIEW PLANS</Button>
            </HeroShowcaseText>
          </HeroContainer>
        <HeroBgPatternLeft></HeroBgPatternLeft>
      <HeroBgPatternRight></HeroBgPatternRight>
    </HeroSection>
  )
}

export default Hero
