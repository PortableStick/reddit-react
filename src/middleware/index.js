import { formatTime } from '../utils';

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
