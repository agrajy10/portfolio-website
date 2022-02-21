import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
