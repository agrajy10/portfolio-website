import styled from 'styled-components';
import { Popover } from '@headlessui/react';

import { ReactComponent as MenuIcon } from '../assets/images/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/images/close-icon.svg';
import { ReactComponent as GithubIcon } from '../assets/images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedin-icon.svg';

const Wrapper = styled(Popover)`
  position: relative;
  z-index: 99;
`;

const MenuToggler = styled(Popover.Button)`
  display: inline-flex;
  place-content: center;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  user-select: none;
  background: transparent;
  padding: 0;
  color: ${({ theme }) => theme.heading.color};
  svg {
    width: 32px;
    height: 32px;
  }
`;

const MobileMenuPanel = styled(Popover.Panel)`
  background-color: ${({ theme }) => theme.bg};
  position: absolute;
  top: 100%;
  right: -15px;
  width: 100vw;
  margin-top: 30px;
`;

const MobileMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  border-top: 2px solid ${({ theme }) => theme.nav.borderColor};
  a {
    display: block;
    padding: 30px 15px;
    color: ${({ theme }) => theme.nav.color};
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.nav.borderColor};
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  place-content: center;
  padding: 0 15px;
  gap: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.nav.borderColor};
  a {
    padding: 20px 0;
    color: ${({ theme }) => theme.nav.color};
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

function MobileMenu() {
  return (
    <Wrapper>
      {({ open }) => {
        return (
          <>
            <MenuToggler aria-label="Toggle Main menu">
              {open ? <CloseIcon /> : <MenuIcon />}
            </MenuToggler>
            <MobileMenuPanel>
              <MobileMenuList>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </MobileMenuList>
              <LinksWrapper>
                <a aria-label="Visit Github page" href="#github">
                  <GithubIcon />
                </a>
                <a aria-label="Visit Linkedin page" href="#linkedin">
                  <LinkedinIcon />
                </a>
              </LinksWrapper>
            </MobileMenuPanel>
          </>
        );
      }}
    </Wrapper>
  );
}

export default MobileMenu;
