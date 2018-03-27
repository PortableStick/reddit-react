import React from 'react';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <ul>
      {props.posts.map(post => <li className="post-item" key={`post-${post}`}>{post}</li>)}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostList;
