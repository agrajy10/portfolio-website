import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.section`
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
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
