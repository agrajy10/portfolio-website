import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';

import Home from './pages/Home';

import AppContext from './context/AppContext';

import GlobalStyle from './styles/globalStyle';
import { lightTheme, darkTheme } from './styles/theme';

function App() {
  const { theme } = useContext(AppContext);
  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
