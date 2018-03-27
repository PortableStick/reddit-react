const { expect } = require('chai');

const URL = 'http://localhost:3000';

describe('RedditApp', () => {
  before(() => {
    browser.url(URL);
  });

  it('should render to the page', () => {
    expect(browser.isExisting('.App')).to.equal(true);
  });
});

