import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

function SectionWrapper({ children, className, ...rest }) {
  return (
    <Wrapper className={className} {...rest}>
      {children}
    </Wrapper>
  );
}

export default SectionWrapper;
