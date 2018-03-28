import { dataService, bindMiddleware } from '../../src/middleware';
import types from '../../src/constants';
import { testUrl, testData, expectedResponseWithTime } from '../mockData';

describe('dataService middleware', () => {
  const networkError = new Error('Network error');
  const fakeFetch = jest.fn().mockReturnValue(Promise.resolve(testData));
  const errorFetch = jest.fn().mockReturnValue(Promise.reject(networkError));
  const dataFetcher = dataService(fakeFetch);
  const errorFetcher = dataService(errorFetch);

  it('should call the fetch function with the passed URL', () => {
    dataFetcher(testUrl);
    expect(fakeFetch).toBeCalledWith(testUrl);
  });

  it('should return a map of the full response', () => {
    expect(dataFetcher(testUrl)).resolves.toEqual(expectedResponseWithTime);
  });

  it('should return a rejected promise on error', () => {
    expect(errorFetcher(testUrl)).rejects.toEqual(networkError);
  });
});

describe('middleware reducer', () => {
  const mockStore = jest.fn();
  const testAction = {
    type: types.FETCHING_POSTS,
    payload: 'best_subreddit',
  };
  let mockDataService;
  let mockNext;
  let middleware;

  beforeEach(() => {
    mockDataService = jest.fn().mockReturnValue(Promise.resolve(expectedResponseWithTime));
    // mockNext returns its argument so we can inspect it for testing
    mockNext = jest.fn(data => data);
    middleware = bindMiddleware(mockDataService)(mockStore)(mockNext);
  });

  it('should call next() with the supplied action', () => {
    middleware(testAction);
    expect(mockNext.mock.calls.length).toEqual(1);
    expect(mockNext.mock.calls[0][0]).toEqual(testAction);
  });

  it('should call the data service when the supplied action is of type FETCHING_POSTS', () => {
    middleware(testAction);
    expect(mockDataService.mock.calls.length).toEqual(1);
  });

  it('should call the data service with a URL modified by the action payload passed as the first argument', () => {
    middleware(testAction);
    expect(mockDataService.mock.calls[0][0]).toEqual(`https://api.reddit.com/r/${testAction.payload}/new`);
  });

  it('should not call the data service when the supplied action is not of type FETCHING_POSTS', () => {
    middleware({ type: 'NOT_RECOGNIZED' });
    expect(mockDataService.mock.calls.length).toEqual(0);
  });

  it('should call next() with the receivePosts action creator when the data service is successful', () => {
    const expectedAction = {
      type: types.RECEIVE_POSTS,
      payload: expectedResponseWithTime,
    };
    const response = middleware(testAction);
    expect(response).resolves.toEqual(expectedAction);
  });
});
