import { Duration } from 'luxon';
import luxonMatchers from './';

expect.extend(luxonMatchers);

describe('Duration matchers', () => {
  it('should not pass when Durations are not equal', () => {
    const oneHour = Duration.fromObject({ hour: 1 });
    const oneHourAndHalf = Duration.fromObject({ hour: 1, minute: 30 });

    expect(oneHour).not.toEqualDuration(oneHourAndHalf);
    expect(oneHour).not.toEqualDurationAsMinutes(oneHourAndHalf);
  });

  it('should pass when Durations are equal as minutes', () => {
    const oneHour = Duration.fromObject({ hour: 1 });
    const sixtyMinutes = Duration.fromObject({ minute: 60 });

    expect(oneHour).toEqualDurationAsMinutes(sixtyMinutes);
    expect(oneHour).not.toEqualDuration(sixtyMinutes);
  });

  it('should pass when Durations are strictly equal', () => {
    const oneHour = Duration.fromObject({ hour: 1 });

    expect(oneHour).toEqualDurationAsMinutes(Duration.fromObject({ hour: 1 }));
    expect(oneHour).toEqualDuration(Duration.fromObject({ hour: 1 }));
  });
});
