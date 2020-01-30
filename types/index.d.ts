/// <reference types="jest" />
import { DateTime, Duration, Interval } from 'luxon';

declare global {
  namespace jest {
    interface Matchers<R> {
      // DateTime
      toEqualDateTime(expected: DateTime): R;
      toBeBeforeDateTime(date: DateTime): R;
      toBeAfterDateTime(date: DateTime): R;

      // Interval
      toEqualInterval(expected: Interval): R;

      // Duration
      toEqualDuration(expected: Duration): R;
      toEqualDurationAsMinutes(expected: Duration): R;
    }
  }
}

type LuxonMatchers = {
  [key in keyof jest.Matchers<void>]: jest.CustomMatcher;
};

declare let matchers: LuxonMatchers;
export default matchers;
