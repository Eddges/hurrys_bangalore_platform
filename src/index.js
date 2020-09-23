import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import Reducer from './redux/reducer';
import User from './redux/user';

const rootReducer = combineReducers({
  usr : User,
  red : Reducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
   ,
  document.getElementById('root')
);

