import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './scss/_index.scss'

import { store } from './redux/store'
import { Provider } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


