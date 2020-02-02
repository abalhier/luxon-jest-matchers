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

  describe('toBeValidDateTime', () => {
    it('should not pass when date is not valid', () => {
      expect('not a DateTime').not.toBeValidDateTime();
      expect(DateTime.invalid('reason')).not.toBeValidDateTime();
      expect(DateTime.fromFormat('undefined', 'dd/MM/yyyy')).not.toBeValidDateTime();
      expect(DateTime.fromFormat('02/02/2020', 'invalid')).not.toBeValidDateTime();
    });

    it('should pass when date is valid', () => {
      expect(DateTime.local()).toBeValidDateTime();
      expect(DateTime.fromFormat('02/02/2020', 'dd/MM/yyyy')).toBeValidDateTime();
    });
  });

  describe('toBeSameDateAs', () => {
    it('should not pass when DateTimes are not the same date', () => {
      expect(DateTime.local().minus({ year: 1 })).not.toBeSameDateAs(DateTime.local());
    });

    it('should pass when DateTimes are the same date', () => {
      const aprilFirst = DateTime.fromFormat('01/04/2020', 'dd/MM/yyyy').startOf('day');

      expect(aprilFirst).toBeSameDateAs(aprilFirst.plus({ hour: 8 }));
    });
  });
});
