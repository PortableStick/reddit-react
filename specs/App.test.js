import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from '../src/App';
import actions from '../src/actions';
import { initialState } from '../src/reducers';

describe('App', () => {
  it('should render without crashing', () => {
    const component = shallow(<App posts={[]} fetchPostsFromSubreddit={() => {}} subreddit="" />);
    expect(component.exists()).toEqual(true);
  });

  describe('mapStateToProps', () => {
    it('should return return a new object with the top-level properties of all passed objects flattened out', () => {
      expect(mapStateToProps(initialState))
        .toMatchObject({ ...initialState.app, ...initialState.flags });
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

    describe('fetchPostsFromSubreddit', () => {
      beforeEach(setup);

      it('should call the dispatch function that gest passed in', () => {
        expect(mockDispatch.mock.calls.length).toEqual(0);
        mappedDispatch.fetchPostsFromSubreddit();
        expect(mockDispatch.mock.calls.length).toEqual(1);
      });

      it('should call the fetchPostsFromSubreddit action with the supplied subreddit passed in', () => {
        const subreddit = 'awww';
        mappedDispatch.fetchPostsFromSubreddit(subreddit);
        expect(mockDispatch.mock.calls[0][0]).toEqual(actions.fetchPostsFromSubreddit(subreddit));
      });
    });
  });
});
