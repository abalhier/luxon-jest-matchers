import { Interval, DateTime } from 'luxon';
import luxonMatchers from './';

expect.extend(luxonMatchers);

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

      expect(betweenNowAndOneHour).toEngulfInterval(Interval.after(DateTime.local(), { hour: 1 }));
    });
  });
});
