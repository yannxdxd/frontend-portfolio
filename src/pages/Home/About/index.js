import React from 'react'
import Trend from 'react-trend'
import Text from 'common/components/Text'
import Title from 'common/components/Title'
import NeonTitle from 'common/components/NeonTitle'
import Device from 'assets/images/fono.png'
import { Container, DescriptionContainer, Content, Footer, LineContainer, FooterContainer, StyledImage } from './styles'

const About = () => (
  <Container>
    <Content>
      <DescriptionContainer>
        <Title text="INTRODUCTION" type="h6" color="contrast" />
        <NeonTitle text="about me" type="h1" color="secondary" />
        <Text
          type="subtitle1"
          text="Creator of solutions for the software industry. With years of experience in the market,
          I have been part of successful projects. Constantly taking on new challenges and constantly training to keep myself a better professional."
          color="white"
        />
      </DescriptionContainer>
    </Content>
    <LineContainer>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
        gradient={['#275f11', '#693BCC', '#20123A']}
        radius={10}
        strokeWidth={0.3}
        strokeLinecap="butt"
      />
    </LineContainer>
    <FooterContainer>
      <StyledImage src={Device} alt="" />
      <Footer>
        <Title text="3+" color="contrast" type="h3" />
        <Title text="Years of experience" color="white" type="h5" />
      </Footer>
    </FooterContainer>
  </Container>
)

export default About
