import React from 'react';
import { shallow } from 'enzyme';
import PostItem from '../../src/components/PostItem';

const testPost = {
  title: 'Some title',
  author: 'Some author',
  time: 'Some time',
  permalink: 'http://somelink',
};

describe('PostItem component', () => {
  const component = shallow(<PostItem
    {...testPost}
  />);

  it('should render without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should render the passed title as a link', () => {
    const postTitle = component.find('.post-title');
    expect(postTitle.text()).toEqual(testPost.title);
    expect(postTitle.prop('href')).toEqual(testPost.permalink);
  });

  it('should render the author\'s name', () => {
    const authorName = component.find('.post-author');
    expect(authorName.text()).toEqual(testPost.author);
  });

  it('should render the post\'s original post time', () => {
    const postTime = component.find('.post-time');
    expect(postTime.text()).toEqual(testPost.time);
  });

  it('should format the post data as "submitted {time} ago by {author}"', () => {
    const postInfo = component.find('.post-info');
    // normalize the text
    const result = postInfo.text().replace(/\s/g, ' ');
    expect(result).toEqual(`Submitted ${testPost.time} ago by ${testPost.author}`);
  });
});
