import actions from '../../src/actions';
import types from '../../src/constants';

describe('Action creators', () => {
  describe('fetchingPosts', () => {
    const subreddit = 'awww';

    it('should create an action to fetch posts', () => {
      const expectedAction = {
        type: types.FETCHING_POSTS,
        payload: subreddit,
      };

      expect(actions.fetchPostsFromSubreddit(subreddit)).toEqual(expectedAction);
    });
  });

  describe('receivePosts', () => {
    it('should create an action to update posts', () => {
      const expectedAction = {
        type: types.RECEIVE_POSTS,
        payload: [],
      };

      expect(actions.receivePosts([])).toEqual(expectedAction);
    });
  });

  describe('handleError', () => {
    it('should create an action to handle an error', () => {
      const err = new Error('not an error lol');
      const expectedAction = {
        type: types.HANDLE_ERROR,
        payload: err,
      };

      expect(actions.handleError(err)).toEqual(expectedAction);
    });
  });
});
