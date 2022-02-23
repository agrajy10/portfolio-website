import styled from 'styled-components';

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
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.nav.color};
    &:hover {
      text-decoration: underline;
    }
  }
  .github svg {
    width: 30px;
    height: 30px;
  }
  .linkedin svg {
    width: 27px;
    height: 27px;
  }
`;

function Menu() {
  return (
    <Wrapper>
      <MenuList>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
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
