import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from './actions';

import './App.css';

import PostList from './components/PostList';
import Header from './components/Header';

export class App extends Component {
  componentWillMount() {
    this.props.fetchPostsFromSubreddit(this.props.subreddit);
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <Header />
        <PostList posts={posts} />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return { ...state.app, ...state.flags };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchPostsFromSubreddit: subreddit => dispatch(actions.fetchPostsFromSubreddit(subreddit)),
  };
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    string: PropTypes.string,
    createdUtc: PropTypes.number,
    permalink: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
  fetchPostsFromSubreddit: PropTypes.func.isRequired,
  subreddit: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
