import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/configureStore';

describe('App', () => {
  const store = configureStore({});

  it('should render without crash', function () {
    const appWrapper = shallow(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    expect(() => appWrapper.render()).not.toThrowError();
  });
});
