import styled from 'styled-components';

import Container from '../layout/Container';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

import useWindowSize from '../hooks/useWindowSize';

const Wrapper = styled.header`
  position: relative;
  padding: 30px 0;
  line-height: 1;
  z-index: 988;
`;

const HeaderContainer = styled(Container)`
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
  const { width } = useWindowSize();
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo>agraj.dev</Logo>
        {width <= 768 ? <MobileMenu /> : <Menu />}
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
