import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BaseRouter from './router/index';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
     <BaseRouter />
  </Provider>,
  document.getElementById('root')
);
