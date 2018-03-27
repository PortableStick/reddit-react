import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../../src/components/PostList';

const testPosts = [
  'Post1',
];

describe('PostList component', () => {
  const component = shallow(<PostList posts={testPosts} />);

  it('should render to the page', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should render a list of Reddit posts', () => {
    expect(component.find('.post-item').length).toEqual(1);
  });
});
