import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:PlusJakartaSans, sans-serif;
    background-color:${({ theme }) => theme.bg};
    color:${({ theme }) => theme.color};
    line-height:1.9;
    transition:all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
