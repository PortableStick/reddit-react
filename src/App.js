import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import actions from './actions';
import './App.css';

export function App() {
  return (
    <Provider store={store}>
      <div className="App" />
    </Provider>
  );
}

export function mapStateToProps(state) {
  return { ...state.rootReducer, ...state.flagReducer };
}

export function mapDispatchToProps(dispatch) {
  return {
    receivePosts: posts => dispatch(actions.receivePosts(posts)),
    fetchPostsFromSubreddit: subreddit => dispatch(actions.fetchPostsFromSubreddit(subreddit)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
