import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
  padding-left: 85px;
  margin-bottom: 50px;
  @media (min-width: ${breakpoints.sm}px) {
    padding-left: 105px;
  }
  @media (min-width: ${breakpoints.md}px) {
    padding-left: 120px;
  }
`;
const Icon = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  @media (min-width: ${breakpoints.sm}px) {
    width: 80px;
    height: 80px;
  }
  @media (min-width: ${breakpoints.md}px) {
    width: 90px;
    height: 90px;
  }
`;

const SubHeading = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.subHeading.color};
  line-height: 1;
  margin-bottom: 4px;
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 32px;
  color: ${({ theme }) => theme.heading.color};
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 40px;
  }
  @media (min-width: ${breakpoints.md}px) {
    font-size: 48px;
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
