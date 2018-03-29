import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../../src/components/PostList';
import PostItem from '../../src/components/PostItem';

const testPosts = [
  {
    title: 'Some title',
    permalink: 'Some link',
    author: 'Some author',
    createdUtc: 12345,
  },
];

describe('PostList component', () => {
  const component = shallow(<PostList posts={testPosts} />);

  it('should render to the page', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should render a list of Reddit posts', () => {
    expect(component.find('PostItem').length).toEqual(1);
  });

  it('should render each post as a PostItem', () => {
    expect(component.find('PostItem').type()).toEqual(PostItem);
  });
});
