import 'modern-normalize';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import { lightTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
