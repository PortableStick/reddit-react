import { dataService } from '../../src/middleware';

const testUrl = 'http://someurl.com';
const expectedResponse = {
  author: 'Dino',
  title: 'Kick butt',
  permalink: 'http://someurl.com/r/mypost',
};
const additionalData = {
  subreddit_id: 't5_2suml',
  approved_at_utc: null,
  send_replies: true,
  mod_reason_by: null,
  banned_by: null,
  num_reports: null,
  removal_reason: null,
  thumbnail_width: 140,
  subreddit: 'Awww',
  selftext_html: null,
  selftext: '',
  likes: null,
  suggested_sort: 'confidence',
  created_utc: (Date.now() / 1000) - 120,
};
const testData = {
  kind: 'Listing',
  data: {
    after: 't3_820rvg',
    dist: 25,
    modhash: '',
    whitelist_status: 'all_ads',
    children: [
      {
        kind: 't3',
        data: { ...additionalData, ...expectedResponse },
      },
    ],
  },
};
const fakeFetch = jest.fn().mockReturnValue(Promise.resolve(testData));

const dataFetcher = dataService(fakeFetch);

describe('dataService middleware', () => {
  it('should call the fetch function with the passed URL', () => {
    dataFetcher(testUrl);
    expect(fakeFetch).toBeCalledWith(testUrl);
  });

  it('should return a map of the full response', () => {
    expect(dataFetcher(testUrl)).resolves.toEqual([{ ...expectedResponse, time: '2 minutes ago' }]);
  });
});
