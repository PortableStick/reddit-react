import PropTypes from 'prop-types';

export const PostModel = PropTypes.shape({
  string: PropTypes.string,
  time: PropTypes.string,
  permalink: PropTypes.string,
  author: PropTypes.string,
});

export const PostsModel = PropTypes.arrayOf(PostModel);
