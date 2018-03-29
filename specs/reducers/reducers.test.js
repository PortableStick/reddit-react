import { rootReducer, flagReducer, initialState } from '../../src/reducers';
import types from '../../src/constants';

const { app, flags } = initialState;

describe('RootReducer', () => {
  it('should return the initial state when nothing is passed', () => {
    expect(rootReducer(undefined, {})).toEqual(app);
  });

  describe('receivePosts', () => {
    const testAction = {
      type: types.RECEIVE_POSTS,
      payload: ['I\'m a post!'],
    };

    it('should return the state with the action\' payload set as the posts', () => {
      const expectedState = {
        posts: testAction.payload,
      };

      expect(rootReducer(app, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with all of the state\'s properties', () => {
      const expectedState = { ...app, posts: testAction.payload };
      expect(rootReducer(app, testAction)).toEqual(expectedState);
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

      expect(rootReducer(app, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with all of the state\'s properties', () => {
      const expectedState = {
        ...app,
        error,
      };

      expect(rootReducer(app, testAction)).toEqual(expectedState);
    });
  });

  describe('updateSubreddit', () => {
    const testAction = {
      type: types.UPDATE_SUBREDDIT,
      payload: 'awww',
    };

    it('should return the state with the updated subreddit', () => {
      const expectedState = {
        ...app,
        subreddit: testAction.payload,
      };

      expect(rootReducer(app, testAction)).toEqual(expectedState);
    });
  });
});


describe('Flag', () => {
  it('should return the initial state when nothing is passed', () => {
    expect(flagReducer(undefined, {})).toEqual(flags);
  });

  describe('flagFetchingPosts', () => {
    const testAction = {
      type: types.FLAG_FETCHING_POSTS,
    };

    it('should return the state with the fetching property set to true', () => {
      const expectedState = {
        fetching: true,
      };

      expect(flagReducer(flags, testAction)).toMatchObject(expectedState);
    });

    it('should return the state with all of the state\'s properties', () => {
      const expectedState = { ...flags, fetching: true };
      expect(flagReducer(flags, testAction)).toEqual(expectedState);
    });
  });

  describe('receivePosts', () => {
    const testAction = {
      type: types.RECEIVE_POSTS,
    };
    it('should set the fetching flag to false', () => {
      const expectedState = { ...flags, fetching: false };
      expect(flagReducer(flags, testAction)).toEqual(expectedState);
    });
  });
});
