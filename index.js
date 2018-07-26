import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import store from './ducks/store'

import App from './App';
import './index.css';


// you only need to wrap Provider over the App root component and this makes it available to every other component in the entire application;

ReactDOM.render (
    <Provider store={store}>
      < App />
    </Provider>,
    document.getElementById('root')
);