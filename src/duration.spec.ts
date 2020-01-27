import { Duration } from 'luxon';
import luxonMatchers from './';

expect.extend(luxonMatchers);

describe('DateTime matchers', () => {
  it('should not pass when Intervals are not equal', () => {
    const oneHour = Duration.fromObject({ hour: 1 });
    const oneHourAndHalf = Duration.fromObject({ hour: 1, minute: 30 });

    expect(oneHour).not.toEqualDuration(oneHourAndHalf);
  });

  it('should pass when Intervals are equal', () => {
    const oneHour = Duration.fromObject({ hour: 1 });

    expect(oneHour).toEqualDuration(Duration.fromObject({ minute: 60 }));
  });
});
