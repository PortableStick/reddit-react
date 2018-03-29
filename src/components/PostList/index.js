import React from 'react';
import PropTypes from 'prop-types';

import PostItem from '../PostItem';

function PostList(props) {
  return (
    <ul>
      {props.posts.map(post => (<PostItem
        key={`${post}-item`}
        {...post}
      />))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    createdUtc: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostList;
