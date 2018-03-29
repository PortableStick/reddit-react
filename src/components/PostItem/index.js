import React from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../../utils';

function PostItem({
  title,
  permalink,
  author,
  createdUtc,
}) {
  return (
    <li className="post-item">
      <a href={permalink} className="post-title">{title}</a>
      <div className="post-info">
        Submitted&nbsp;
        <span className="post-time">{formatTime(createdUtc)}</span>
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
  createdUtc: PropTypes.number.isRequired,
};

export default PostItem;
