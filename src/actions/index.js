import types from '../constants';

const actions = {
  fetchPostsFromSubreddit: subreddit => ({
    type: types.FETCHING_POSTS,
    payload: subreddit,
  }),
};

export default actions;
