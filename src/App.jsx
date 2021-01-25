import React from 'react';
import PersonasActivistas from './components/PersonasActivistas';
import { Provider } from 'react-redux'
import generateStore from './redux/store';

function App() {
  const store = generateStore()
  return (
    <h1>
      <Provider store={store}>
        <PersonasActivistas />
      </Provider>
    </h1>
  );
}

export default App;
