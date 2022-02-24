import { Switch } from '@headlessui/react';
import { useContext } from 'react';
import styled from 'styled-components';

import AppContext from '../context/AppContext';

import { ReactComponent as SunIcon } from '../assets/images/sun-icon.svg';
import { ReactComponent as MoonIcon } from '../assets/images/moon-icon.svg';

const Button = styled(Switch)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: ${({ theme }) => theme.themeToggler.bg};
  border: 2px solid ${({ theme }) => theme.themeToggler.borderColor};
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.themeToggler.color};
  outline: none;
  transition: border-color 0.5s ease;
  svg {
    width: 28px;
    height: 28px;
  }
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.themeToggler.color};
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
      onChange={onChange}>
      <span aria-hidden="true">{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</span>
    </Button>
  );
}

export default ThemeToggler;
