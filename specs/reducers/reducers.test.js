import { rootReducer, flagReducer, initialState } from '../../src/reducers';
import types from '../../src/constants';

const startingState = {
  fetching: true,
  posts: [],
  error: false,
  subreddit: 'all',
};

describe('RootReducer', () => {
  it('should return the initial state when nothing is passed', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  describe('receivePosts', () => {
    const testAction = {
      type: types.RECEIVE_POSTS,
      payload: ['I\'m a post!'],
    };

    it('should return the state with the fetching property set to false', () => {
      const expectedState = {
        fetching: false,
      };

      expect(rootReducer(startingState, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with the action\' payload set as the posts', () => {
      const expectedState = {
        posts: testAction.payload,
      };

      expect(rootReducer(startingState, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with all of the state\'s properties', () => {
      const expectedState = { ...startingState, posts: testAction.payload, fetching: false };
      expect(rootReducer(startingState, testAction)).toEqual(expectedState);
    });
  });

  describe('handleError', () => {
    const error = new Error('Some error');
    const testAction = {
      type: types.HANDLE_ERROR,
      payload: error,
    };

    it('should return the state with the error property set', () => {
      const expectedState = {
        error,
      };

      expect(rootReducer(startingState, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with all of the state\'s properties', () => {
      const expectedState = {
        ...startingState,
        error,
      };

      expect(rootReducer(startingState, testAction)).toEqual(expectedState);
    });
  });

  describe('updateSubreddit', () => {
    const testAction = {
      type: types.UPDATE_SUBREDDIT,
      payload: 'awww',
    };

    it('should return the state with the updated subreddit', () => {
      const expectedState = {
        ...startingState,
        subreddit: testAction.payload,
      };

      expect(rootReducer(startingState, testAction)).toEqual(expectedState);
    });
  });
});


describe('Flag', () => {
  it('should return the initial state when nothing is passed', () => {
    expect(flagReducer(undefined, {})).toEqual(initialState);
  });

  describe('fetchPostsFromSubreddit', () => {
    const testAction = {
      type: types.FLAG_FETCHING_POSTS,
    };

    it('should return the state with the fetching property set to true', () => {
      const expectedState = {
        fetching: true,
      };

      expect(flagReducer(startingState, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with all of the state\'s properties', () => {
      const expectedState = { ...startingState, fetching: true };
      expect(flagReducer(startingState, testAction)).toEqual(expectedState);
    });
  });
});
