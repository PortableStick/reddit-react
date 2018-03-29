import types from '../constants';

const actions = {
  fetchPostsFromSubreddit: subreddit => ({
    type: types.FETCHING_POSTS,
    payload: subreddit,
  }),
  receivePosts: posts => ({
    type: types.RECEIVE_POSTS,
    payload: posts,
  }),
  handleError: error => ({
    type: types.HANDLE_ERROR,
    payload: error,
  }),
};

export default actions;
