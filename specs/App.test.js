import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
