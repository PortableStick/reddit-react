import types from '../constants';

export const initialState = {
  fetching: false,
  posts: [],
  error: null,
  subreddit: 'awww',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_POSTS:
      return {
        ...state,
        fetching: false,
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

export function flagReducer(state = initialState, action) {
  switch (action.type) {
    case types.FLAG_FETCHING_POSTS:
      return {
        ...state,
        fetching: true,
      };
    default:
      return state;
  }
}
