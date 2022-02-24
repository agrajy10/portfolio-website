import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
  padding-left: 5.3125rem;
  margin-bottom: 3.125rem;
  @media (min-width: ${breakpoints.sm}px) {
    padding-left: 6.5625rem;
  }
  @media (min-width: ${breakpoints.md}px) {
    padding-left: 7.5rem;
  }
`;
const Icon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  @media (min-width: ${breakpoints.sm}px) {
    width: 5rem;
    height: 5rem;
  }
  @media (min-width: ${breakpoints.md}px) {
    width: 5.625rem;
    height: 5.625rem;
  }
`;

const SubHeading = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.subHeading.color};
  line-height: 1;
  margin-bottom: 0.25rem;
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.heading.color};
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 2.5rem;
  }
  @media (min-width: ${breakpoints.md}px) {
    font-size: 3rem;
  }
`;

function SectionHeading({ subheading, heading, icon, className }) {
  return (
    <Wrapper className={className}>
      <Icon src={icon} alt="" />
      <SubHeading>{subheading}</SubHeading>
      <Heading>{heading}</Heading>
    </Wrapper>
  );
}

export default SectionHeading;
