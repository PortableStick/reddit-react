import { formatTime } from '../utils';
import actions from '../actions';

export function dataService(service) {
  function boundDataService(url) {
    return service(url)
      .then(redditResponse => redditResponse.data.children)
      .then(children => children.map(child => child.data))
      .then(posts => posts.map(post => ({
        author: post.author,
        permalink: post.permalink,
        title: post.title,
        time: formatTime(+post.created_utc),
      })));
  }

  return boundDataService;
}

export function bindMiddleware(JSONfetch) {
  return function dataMiddleWare(store) {
    return function dataMiddlewareTakesNext(next) {
      return function dataMiddleWareReducer(action) {
        next(action);
        switch (action.type) {
          case 'FETCHING_POSTS':
            return JSONfetch(`https://api.reddit.com/r/${action.payload}/new`)
              .then(posts => next(actions.receivePosts(posts)))
              .catch(error => next(actions.handleError(error)));
          default:
            break;
        }
        return store;
      };
    };
  };
}
