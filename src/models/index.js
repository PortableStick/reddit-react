import PropTypes from 'prop-types';

export const PostModel = PropTypes.shape({
  string: PropTypes.string,
  createdUtc: PropTypes.number,
  permalink: PropTypes.string,
  author: PropTypes.string,
});

export const PostsModel = PropTypes.arrayOf(PostModel);
