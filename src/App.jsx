import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import generateStore from './redux/store';
import Container from './components/Container';
import theme from './themeConfig'

function App() {
  const store = generateStore()
  return (
    <h1>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Container />
        </Provider>
      </ThemeProvider>
    </h1>
  );
}

export default App;
