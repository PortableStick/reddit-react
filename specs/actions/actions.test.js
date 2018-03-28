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
});
