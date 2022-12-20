import Footer from './components/Footer';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Theme';
import { useState } from 'react';
import ToggleThemeButton from './components/ToggleThemeButton';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  function handleToggleTheme(): void {
    setTheme(theme.name === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles {...theme} />
      <ToggleThemeButton handleToggleTheme={handleToggleTheme} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
