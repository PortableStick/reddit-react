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
  flagFetchingPosts: () => ({
    type: types.FLAG_FETCHING_POSTS,
  }),
  updateSubreddit: newSubreddit => ({
    type: types.UPDATE_SUBREDDIT,
    payload: newSubreddit,
  }),
};

export default actions;

