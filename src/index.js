import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Reducer from './redux/reducer';

const store = createStore(Reducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
   ,
  document.getElementById('root')
);

