import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/bundle.css";
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { createStore } from 'redux';
import {Provider} from "react-redux";

const store = createStore();

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
