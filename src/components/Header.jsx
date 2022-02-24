import styled from 'styled-components';

import Container from '../layout/Container';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import ThemeToggler from './ThemeToggler';

import useWindowSize from '../hooks/useWindowSize';
import breakpoints from '../styles/breakpoints';

const Wrapper = styled.header`
  position: relative;
  padding: 1.875rem 0;
  line-height: 1;
  z-index: 988;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  @media (min-width: ${breakpoints.md}px) {
    gap: 48px;
  }
`;

const Logo = styled.h1`
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1;
  margin: 0 auto 0 0;
  color: ${({ theme }) => theme.heading.color};
  @media (min-width: ${breakpoints.md}px) {
    padding-bottom: 0.5rem;
  }
`;

function Header() {
  const { width } = useWindowSize();
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo>agraj.dev</Logo>
        {width <= 768 ? <MobileMenu /> : <Menu />}
        <ThemeToggler />
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
