import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from '../src/App';
import actions from '../src/actions';

describe('App', () => {
  it('should render without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });

  describe('mapStateToProps', () => {
    it('should return return a new object with the top-level properties of all passed objects flattened out', () => {
      const testState = {
        rootReducer: {
          posts: [],
          error: null,
        },
        flagReducer: {
          fetching: false,
        },
      };

      expect(mapStateToProps(testState))
        .toMatchObject({ ...testState.rootReducer, ...testState.flagReducer });
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let mappedDispatch;

    function setup() {
      mockDispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(mockDispatch);
    }

    beforeEach(setup);

    it('should return an object', () => {
      expect(mappedDispatch).toMatchObject({});
    });

    describe('receivePosts', () => {
      beforeEach(setup);

      it('should call the dispatch function that gets passed in', () => {
        expect(mockDispatch.mock.calls.length).toEqual(0);
        mappedDispatch.receivePosts();
        expect(mockDispatch.mock.calls.length).toEqual(1);
      });

      it('should pass the receivePosts action to the dispatch function', () => {
        const testPosts = ['first post', 'second post'];
        mappedDispatch.receivePosts(testPosts);
        expect(mockDispatch.mock.calls[0][0]).toEqual(actions.receivePosts(testPosts));
      });
    });

    describe('fetchPostsFromSubreddit', () => {
      beforeEach(setup);

      it('should call the dispatch function that gest passed in', () => {
        expect(mockDispatch.mock.calls.length).toEqual(0);
        mappedDispatch.fetchPostsFromSubreddit();
        expect(mockDispatch.mock.calls.length).toEqual(1);
      });
    });
  });
});
