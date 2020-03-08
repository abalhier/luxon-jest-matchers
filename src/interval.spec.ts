import { Interval, DateTime } from 'luxon';
import './';

describe('Interval matchers', () => {
  describe('toEqual', () => {
    it('should not pass when Intervals are not equal', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });
      const betweenNowAndTwoHours = Interval.after(DateTime.local(), { hour: 2 });

      expect(betweenNowAndOneHour).not.toEqualInterval(betweenNowAndTwoHours);
    });

    it('should pass when Intervals are equal', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });

      expect(betweenNowAndOneHour).toEqualInterval(betweenNowAndOneHour);
    });
  });

  describe('toEngulfInterval', () => {
    it('should not pass when Intervals do not overlap', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });
      const inOneHourInterval = Interval.after(DateTime.local().plus({ hour: 1 }), { hour: 1 });

      expect(betweenNowAndOneHour).not.toEngulfInterval(inOneHourInterval);
    });

    it('should not pass when Intervals partially overlap', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });
      const in59MinutesInterval = Interval.after(DateTime.local().plus({ minute: 59 }), { hour: 1 });

      expect(betweenNowAndOneHour).not.toEngulfInterval(in59MinutesInterval);
    });

    it('should pass when first Interval contains given Interval ', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });

      expect(betweenNowAndOneHour).toEngulfInterval(Interval.after(DateTime.local(), { minute: 50 }));
    });
  });

  describe('toContainDateTime', () => {
    it('should not pass when Interval does not contain given DateTime', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });

      expect(betweenNowAndOneHour).not.toContainDateTime(DateTime.local().plus({ hour: 2 }));
    });

    it('should pass when Interval contains given DateTime', () => {
      const betweenNowAndOneHour = Interval.after(DateTime.local(), { hour: 1 });

      expect(betweenNowAndOneHour).toContainDateTime(DateTime.local().plus({ minute: 59 }));
    });
  });

  describe('toBeValidInterval', () => {
    it('should not pass when interval is not valid', () => {
      expect('not an Interval').not.toBeValidInterval();
      expect(Interval.invalid('reason')).not.toBeValidInterval();
    });

    it('should pass when interval is valid', () => {
      expect(Interval.after(DateTime.local(), { hour: 3 })).toBeValidInterval();
    });
  });
});
