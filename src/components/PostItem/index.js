import React from 'react';
import PropTypes from 'prop-types';

function PostItem({
  title,
  permalink,
  author,
  time,
}) {
  return (
    <li className="post-item">
      <a href={permalink} className="post-title">{title}</a>
      <div className="post-info">
        Submitted&nbsp;
        <span className="post-time">{time}</span>
        &nbsp;ago by&nbsp;
        <span className="post-author">{author}</span>
      </div>
    </li>
  );
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostItem;
