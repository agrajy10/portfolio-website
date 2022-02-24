import styled from 'styled-components';

import SectionWrapper from '../../layout/SectionWrapper';
import Container from '../../layout/Container';
import SectionHeading from '../SectionHeading';

import ContactIcon from '../../assets/images/contact-icon.png';
import { ReactComponent as GithubIcon } from '../../assets/images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/linkedin-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/images/email-icon.svg';

import breakpoints from '../../styles/breakpoints';

const ContactWrapper = styled(SectionWrapper)`
  background-color: #161a25;
  margin-top: 50px;
  @media (min-width: ${breakpoints.sm}px) {
    margin-top: 100px;
  }
`;

const ContactHeading = styled(SectionHeading)`
  position: static;
  padding: 0;
  text-align: center;
  img {
    position: static;
    display: block;
    margin: 0 auto 30px auto;
    transform: translateY(0);
  }
  h2 {
    color: #fff;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  a {
    color: #fff;
  }
  svg {
    width: 40px;
    height: 40px;
  }
  @media (min-width: ${breakpoints.sm}px) {
    gap: 100px;
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

function ContactSection() {
  return (
    <ContactWrapper id="contact">
      <Container>
        <ContactHeading
          icon={ContactIcon}
          heading="Let’s connect with each other."
          subheading="Contact"
        />
        <LinksWrapper>
          <a
            className="github"
            href="https://github.com/agrajy10"
            target="_blank"
            aria-label="Visit Github page (opens in a new tab)">
            <GithubIcon />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/agrajyadav/"
            target="_blank"
            aria-label="Visit Linkedin page (opens in a new tab)">
            <LinkedinIcon />
          </a>
          <a href="mailto:agrajy10@gmail.com" aria-label="Send an email">
            <EmailIcon />
          </a>
        </LinksWrapper>
      </Container>
    </ContactWrapper>
  );
}

export default ContactSection;
