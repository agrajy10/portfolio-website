import styled from 'styled-components';

import Button from '../Button';

import breakpoints from '../../styles/breakpoints';

import Photo from '../../assets/images/photo.jpg';
import WavingHand from '../../assets/images/waving-hand-icon.png';

const Wrapper = styled.section`
  padding: 2.5rem 0 6.25rem 0;
  text-align: center;
`;

const ProfilePhoto = styled.img`
  display: inline-block;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.heading.color};
  max-width: 22.5rem;
  margin: 0 auto 1.25rem auto;
  font-size: 3rem;
  line-height: 1.2;
  span {
    display: inline-block;
    position: relative;
    padding-left: 3.4375rem;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.875rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 5rem;
    max-width: 48.75rem;
    span {
      font-size: 2rem;
      padding-left: 4.6875rem;
      img {
        width: 3.75rem;
        height: 3.75rem;
      }
    }
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  max-width: 50rem;
  margin: 0 auto 3.75rem auto;
  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.heading.color};
  }
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 1.25rem;
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
  const onClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
      behavior: 'smooth'
    });
  };
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
        <Button href="#work" onClick={onClick}>
          View Projects
        </Button>
        <Button variant="secondary">Download Resume</Button>
      </LinksWrapper>
    </Wrapper>
  );
}

export default HeroSection;
