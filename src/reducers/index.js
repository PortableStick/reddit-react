import types from '../constants';

export const initialState = {
  flags: {
    fetching: false,
  },
  app: {
    posts: [],
    error: null,
    subreddit: 'awww',
  },
};

export function rootReducer(state = initialState.app, action) {
  switch (action.type) {
    case types.RECEIVE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case types.HANDLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.UPDATE_SUBREDDIT:
      return {
        ...state,
        subreddit: action.payload,
      };
    default:
      return state;
  }
}

export function flagReducer(state = initialState.flags, action) {
  switch (action.type) {
    case types.FLAG_FETCHING_POSTS:
      return {
        ...state,
        fetching: true,
      };
    case types.RECEIVE_POSTS:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
