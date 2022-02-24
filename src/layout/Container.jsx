import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 73.75rem;
  margin: 0 auto;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
`;

function Container({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default Container;
