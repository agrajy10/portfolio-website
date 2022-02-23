import styled from 'styled-components';

import Button from '../Button';

import breakpoints from '../../styles/breakpoints';

import Photo from '../../assets/images/photo.png';
import WavingHand from '../../assets/images/waving-hand-icon.png';

const Wrapper = styled.section`
  padding: 40px 0 100px 0;
  text-align: center;
`;

const ProfilePhoto = styled.img`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.heading.color};
  max-width: 360px;
  margin: 0 auto 20px auto;
  font-size: 48px;
  line-height: 1.2;
  span {
    display: inline-block;
    position: relative;
    padding-left: 55px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    img {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 80px;
    max-width: 780px;
    span {
      font-size: 32px;
      padding-left: 75px;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

const Text = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 60px auto;
  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.heading.color};
  }
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 20px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  @media (min-width: ${breakpoints.sm}px) {
    flex-direction: row;
    gap: 30px;
  }
`;

function HeroSection() {
  return (
    <Wrapper id="home">
      <ProfilePhoto src={Photo} alt="Photo of Agraj Yadav" />
      <Heading>
        <span>
          <img src={WavingHand} alt="" /> Hi there, I'm Agraj
        </span>
        <br />
        Self-taught Frontend Developer From India
      </Heading>
      <Text>
        Building websites and web-apps with <strong>high performance</strong> and
        <strong> intuitive user experience</strong> are fields of my interest. My experience and
        expertise lies in
        <strong> ReactJS, Firebase, Redux, Styled Components and TailwindCSS</strong>.
      </Text>
      <LinksWrapper>
        <Button href="#projects">View Projects</Button>
        <Button variant="secondary">Download Resume</Button>
      </LinksWrapper>
    </Wrapper>
  );
}

export default HeroSection;
