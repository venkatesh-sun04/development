import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Provider} from 'react-redux';
import Main from './Main';
import store from '../store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
