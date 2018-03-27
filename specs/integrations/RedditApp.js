const { expect } = require('chai');

const URL = 'http://localhost:3000';

describe('RedditApp', () => {
  before(() => {
    browser.url(URL);
  });

  it('should render to the page', () => {
    expect(browser.isExisting('.App')).to.equal(true);
  });

  it('should have the correct title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal('Reddit Viewer');
  });
});

