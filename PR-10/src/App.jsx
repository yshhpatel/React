/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Home from './Components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
