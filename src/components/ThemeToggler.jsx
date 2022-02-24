import { Switch } from '@headlessui/react';
import { useContext } from 'react';
import styled from 'styled-components';

import AppContext from '../context/AppContext';

import { ReactComponent as SunIcon } from '../assets/images/sun-icon.svg';
import { ReactComponent as MoonIcon } from '../assets/images/moon-icon.svg';

const Button = styled(Switch)`
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 3.125rem;
  height: 3.125rem;
  padding: 0;
  background-color: ${({ theme }) => theme.themeToggler.bg};
  border: 2px solid ${({ theme }) => theme.themeToggler.borderColor};
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.themeToggler.color};
  outline: none;
  transition: border-color 0.5s ease;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.themeToggler.color};
  }
  .sun-icon,
  .moon-icon {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    transition: all 1s ease;
    transform-origin: 50% 100px;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  .sun-icon {
    transform: rotate(0deg);
  }
  .moon-icon {
    transform: rotate(90deg);
  }
  &.dark-mode .sun-icon {
    transform: rotate(-90deg);
  }
  &.dark-mode .moon-icon {
    transform: rotate(0deg);
  }
`;

function ThemeToggler() {
  const { theme, setTheme } = useContext(AppContext);

  const onChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      aria-label="Enable dark mode"
      checked={theme === 'dark' ? true : false}
      onChange={onChange}
      className={theme === 'dark' ? 'dark-mode' : ''}>
      <span aria-hidden="true" className="sun-icon">
        <SunIcon />
      </span>
      <span aria-hidden="true" className="moon-icon">
        <MoonIcon />
      </span>
    </Button>
  );
}

export default ThemeToggler;
