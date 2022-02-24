import styled from 'styled-components';

import { links } from '../data';

import { ReactComponent as GithubIcon } from '../assets/images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedin-icon.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 48px;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 48px;
  a {
    display: block;
    position: relative;
    font-weight: 600;
    text-decoration: none;
    padding-bottom: 0.5rem;
    color: ${({ theme }) => theme.nav.color};
    &:not(.linkedin, .github) {
      outline: none;
    }
    &:not(.linkedin, .github)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.125rem;
      transform: scaleX(0);
      transform-origin: left center;
      background-color: ${({ theme }) => theme.nav.color};
      transition: transform 0.3s ease;
    }
    &:hover::after,
    &:focus::after {
      transform: scaleX(1);
    }
  }
  .github svg {
    width: 1.625rem;
    height: 1.625rem;
  }
  .linkedin svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function Menu() {
  const onClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
      behavior: 'smooth'
    });
  };

  return (
    <Wrapper>
      <MenuList>
        {links.map(({ id, label, href }) => {
          return (
            <li key={id}>
              <a onClick={onClick} href={href}>
                {label}
              </a>
            </li>
          );
        })}
        <li>
          <a
            className="github"
            href="https://github.com/agrajy10"
            target="_blank"
            aria-label="Visit Github page (opens in a new tab)">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/agrajyadav/"
            target="_blank"
            aria-label="Visit Linkedin page (opens in a new tab)">
            <LinkedinIcon />
          </a>
        </li>
      </MenuList>
    </Wrapper>
  );
}

export default Menu;
