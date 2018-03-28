import { formatTime } from '../../src/utils';

describe('Utils', () => {
  describe('formatTime', () => {
    describe('given a time in seconds', () => {
      it('should output "less than a minute ago" when < 60', () => {
        const lessThanMinute = (Date.now() / 1000) - 1;
        expect(formatTime(lessThanMinute)).toEqual('less than a minute ago');
      });

      it('should give the time in minutes when > 60', () => {
        const minutesAgo = (Date.now() / 1000) - 120;
        expect(formatTime(minutesAgo)).toEqual('2 minutes ago');
      });

      it('should only pluralize minutes when more than 1', () => {
        const oneMinute = (Date.now() / 1000) - 60;
        expect(formatTime(oneMinute)).toEqual('1 minute ago');
      });

      it('should give the time in hours when > 3600', () => {
        const hoursAgo = (Date.now() / 1000) - 7201;
        expect(formatTime(hoursAgo)).toEqual('2 hours ago');
      });

      it('should only pluralize hours when more than 1', () => {
        const oneHour = (Date.now() / 1000) - 3600;
        expect(formatTime(oneHour)).toEqual('1 hour ago');
      });

      it('should give the time in days if more than 86400', () => {
        const daysAgo = (Date.now() / 1000) - 172802;
        expect(formatTime(daysAgo)).toEqual('2 days ago');
      });

      it('should only pluralize days when more than 1', () => {
        const oneDay = (Date.now() / 1000) - 86401;
        expect(formatTime(oneDay)).toEqual('1 day ago');
      });

      it('should give the time in years if more than 31536000', () => {
        const yearsAgo = (Date.now() / 1000) - 63072000;
        expect(formatTime(yearsAgo)).toEqual('more than 2 years ago');
      });

      it('should only pluralize years if more than 1', () => {
        const oneYear = (Date.now() / 1000) - 31536001;
        expect(formatTime(oneYear)).toEqual('more than a year ago');
      });
    });
  });
});
