import React from 'react';
import { shallow } from 'enzyme';
import { AuthPage } from 'pages/auth';

describe('AuthPage', () => {
  it('should render without crash', function () {
    const wrapper = shallow(<AuthPage />);

    expect(() => wrapper.render()).not.toThrowError();
  });
});
