import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Alert } from 'antd';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

const { ErrorBoundary } = Alert;

const store = configureStore({});

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);
