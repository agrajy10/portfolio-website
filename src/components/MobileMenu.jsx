import styled from 'styled-components';
import { Popover } from '@headlessui/react';

import { links } from '../data';

import { ReactComponent as MenuIcon } from '../assets/images/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/images/close-icon.svg';
import { ReactComponent as GithubIcon } from '../assets/images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedin-icon.svg';

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

const Overlay = styled(Popover.Overlay)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.bg};
  z-index: -1;
`;

const MobileMenuPanel = styled(Popover.Panel)`
  background-color: ${({ theme }) => theme.bg};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
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
  const onClick = (e, close) => {
    e.preventDefault();
    close();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
      behavior: 'smooth'
    });
  };
  return (
    <Popover>
      {({ open, close }) => {
        return (
          <>
            <MenuToggler aria-label="Toggle Main menu">
              {open ? <CloseIcon /> : <MenuIcon />}
            </MenuToggler>
            <Overlay />
            <MobileMenuPanel>
              <MobileMenuList>
                {links.map(({ id, label, href }) => {
                  return (
                    <li key={id}>
                      <a onClick={(e) => onClick(e, close)} href={href}>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </MobileMenuList>
              <LinksWrapper>
                <Popover.Button
                  as="a"
                  className="github"
                  href="https://github.com/agrajy10"
                  target="_blank"
                  aria-label="Visit Github page (opens in a new tab)">
                  <GithubIcon />
                </Popover.Button>
                <Popover.Button
                  as="a"
                  className="linkedin"
                  href="https://www.linkedin.com/in/agrajyadav/"
                  target="_blank"
                  aria-label="Visit Linkedin page (opens in a new tab)">
                  <LinkedinIcon />
                </Popover.Button>
              </LinksWrapper>
            </MobileMenuPanel>
          </>
        );
      }}
    </Popover>
  );
}

export default MobileMenu;
