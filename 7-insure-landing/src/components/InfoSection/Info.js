import { InfoSection, InfoContainer, InfoHeading, InfoCards, InfoCard, InfoCardImage, InfoCardTitle, InfoCardDescription,
} from './Info.styles'

const Info = () => {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoHeading>We're different</InfoHeading>
        <InfoCards>
          <InfoCard>
            <InfoCardImage src="./images/icon-snappy-process.svg" alt="Snappy process icon"></InfoCardImage>
            <InfoCardTitle>Snappy Process</InfoCardTitle>
            <InfoCardDescription>Our application process can be completed in minutes, not hours.Don't get stuck filling in tedious forms.</InfoCardDescription>
          </InfoCard>
            <InfoCard>
              <InfoCardImage src="./images/icon-affordable-prices.svg" alt="Affordable prices icon"></InfoCardImage>
              <InfoCardTitle>Affordable Prices</InfoCardTitle>
              <InfoCardDescription>We don't want you worrying about high mothly costs. Our prices may be low, but we still offer the best coverage possible.</InfoCardDescription>
            </InfoCard>
          <InfoCard>
            <InfoCardImage src="./images/icon-people-first.svg" alt="People icon"></InfoCardImage>
            <InfoCardTitle>People First</InfoCardTitle>
            <InfoCardDescription>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</InfoCardDescription>
          </InfoCard>
        </InfoCards>
      </InfoContainer>
    </InfoSection>
  )
}

export default Info
