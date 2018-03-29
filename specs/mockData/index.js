const time = (Date.now() / 1000) - 120;
export const testUrl = 'http://someurl.com';
export const expectedResponse = {
  author: 'Dino',
  title: 'Kick butt',
  permalink: 'http://someurl.com/r/mypost',
};
export const testData = {
  kind: 'Listing',
  data: {
    after: 't3_820rvg',
    dist: 25,
    modhash: '',
    whitelist_status: 'all_ads',
    children: [
      {
        kind: 't3',
        data: {
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
          created_utc: time,
          ...expectedResponse,
        },
      },
    ],
  },
};
export const expectedResponseWithTime = [{ ...expectedResponse, createdUtc: time }];
