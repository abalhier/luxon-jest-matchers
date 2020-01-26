import { Interval, DateTime } from 'luxon';
import luxonMatchers from './';

expect.extend(luxonMatchers);

describe('DateTime matchers', () => {
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
