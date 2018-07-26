import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import store from './ducks/store'

import App from './App';
import './index.css';

// you only need one Provider;
// you only need to wrap Provider over the App root component and pass store as a variable;this makes the store available to every other component in the entire application;

ReactDOM.render (
    <Provider store={store}>
      < App />
    </Provider>,
    document.getElementById('root')
);