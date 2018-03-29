import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

describe('Header', () => {
  const component = shallow(<Header />);

  it('should render without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('shoud render an input', () => {
    expect(component.find('.subreddit-input').exists()).toEqual(true);
  });
});

