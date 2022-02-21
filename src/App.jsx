import 'modern-normalize';

import { lightTheme } from './styles/theme';

import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle theme={lightTheme} />
      <h1>Portfolio website</h1>
    </div>
  );
}

export default App;
