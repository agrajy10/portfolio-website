import { createGlobalStyle } from 'styled-components';

import PlusJakartaSansWoff from '../assets/fonts/PlusJakartaSans-Regular.woff';
import PlusJakartaSansWoff2 from '../assets/fonts/PlusJakartaSans-Regular.woff2';
import PlusJakartaSansMediumWoff from '../assets/fonts/PlusJakartaSans-Medium.woff';
import PlusJakartaSansMediumWoff2 from '../assets/fonts/PlusJakartaSans-Medium.woff2';
import PlusJakartaSansSemiBoldWoff from '../assets/fonts/PlusJakartaSans-SemiBold.woff';
import PlusJakartaSansSemiBoldWoff2 from '../assets/fonts/PlusJakartaSans-SemiBold.woff2';
import PlusJakartaSansBoldWoff from '../assets/fonts/PlusJakartaSans-Bold.woff';
import PlusJakartaSansBoldWoff2 from '../assets/fonts/PlusJakartaSans-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PlusJakartaSans';
    font-weight:400;
    src: url(${PlusJakartaSansWoff2}) format('woff2'),
        url(${PlusJakartaSansWoff}) format('woff');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-weight:500;
    src: url(${PlusJakartaSansMediumWoff2}) format('woff2'),
        url(${PlusJakartaSansMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-weight:600;
    src: url(${PlusJakartaSansSemiBoldWoff2}) format('woff2'),
        url(${PlusJakartaSansSemiBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'PlusJakartaSans';
    font-weight:700;
    src: url(${PlusJakartaSansBoldWoff2}) format('woff2'),
        url(${PlusJakartaSansBoldWoff}) format('woff');
  }

  body {
    font-family:PlusJakartaSans, sans-serif;
    background-color:${({ theme }) => theme.bg};
    color:${({ theme }) => theme.color};
    line-height:1.9;
  }

  h1,h2,h3 {
    line-height:1.3;
    font-weight:700;
  }

  img {
    max-width:100%;
  }
`;

export default GlobalStyle;
