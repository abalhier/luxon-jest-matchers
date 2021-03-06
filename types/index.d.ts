/// <reference types="jest" />
import { DateTime, Duration, Interval, DurationUnit } from 'luxon';

declare global {
  namespace jest {
    interface Matchers<R> {
      // DateTime
      toEqualDateTime(expected: DateTime): R;
      toBeBeforeDateTime(date: DateTime): R;
      toBeStrictlyBeforeDateTime(date: DateTime): R;
      toBeAfterDateTime(date: DateTime): R;
      toBeStrictlyAfterDateTime(date: DateTime): R;
      toBeValidDateTime(): R;
      toBeSameDateAs(date: DateTime): R;

      // Interval
      toEqualInterval(expected: Interval): R;
      toEngulfInterval(interval: Interval): R;
      toContainDateTime(date: DateTime): R;
      toBeValidInterval(): R;

      // Duration
      toEqualDuration(expected: Duration): R;
      toEqualDurationAs(expected: Duration, unit: DurationUnit): R;
      toBeValidDuration(): R;
    }
  }
}

type LuxonMatchers = {
  [key in keyof jest.Matchers<void>]: jest.CustomMatcher;
};

declare let matchers: LuxonMatchers;
export default matchers;
