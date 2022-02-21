import styled from 'styled-components';

import Container from '../layout/Container';
import MobileMenu from './MobileMenu';

const Wrapper = styled.header`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  color: ${({ theme }) => theme.heading.color};
`;

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>agraj.dev</Logo>
        <MobileMenu />
      </Wrapper>
    </Container>
  );
}

export default Header;
