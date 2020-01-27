import { DateTime } from 'luxon';
import luxonMatchers from './';

expect.extend(luxonMatchers);

describe('DateTime matchers', () => {
  describe('toEqualDateTime', () => {
    it('should not pass when DateTimes are not equal', () => {
      const now = DateTime.local();
      const nowMinusOneSecond = DateTime.local().minus({ second: 1 });

      expect(now).not.toEqualDateTime(nowMinusOneSecond);
    });

    it('should pass when DateTimes are equal', () => {
      const now = DateTime.local();

      expect(now).toEqualDateTime(DateTime.fromMillis(now.toMillis()));
    });
  });

  describe('toBeAfterDateTime', () => {
    it('should not pass when first DateTime is equal to given DateTime', () => {
      const now = DateTime.local();

      expect(now).not.toBeAfterDateTime(now);
    });

    it('should pass when first DateTime is after given DateTime', () => {
      const now = DateTime.local();
      const nowMinusOneSecond = now.minus({ second: 1 });

      expect(now).toBeAfterDateTime(nowMinusOneSecond);
    });

    it('should not pass when first DateTime is before given DateTime', () => {
      const now = DateTime.local();
      const nowPlusOneSecond = now.plus({ second: 1 });

      expect(now).not.toBeAfterDateTime(nowPlusOneSecond);
    });
  });

  describe('toBeBeforeDateTime', () => {
    it('should not pass when first DateTime is equal to given DateTime', () => {
      const now = DateTime.local();

      expect(now).not.toBeBeforeDateTime(now);
    });

    it('should pass when first DateTime is before given DateTime', () => {
      const now = DateTime.local();
      const nowPlusOneSecond = now.plus({ second: 1 });

      expect(now).toBeBeforeDateTime(nowPlusOneSecond);
    });

    it('should not pass when first DateTime is after given DateTime', () => {
      const now = DateTime.local();
      const nowMinusOneSecond = now.minus({ second: 1 });

      expect(now).not.toBeBeforeDateTime(nowMinusOneSecond);
    });
  });
});
