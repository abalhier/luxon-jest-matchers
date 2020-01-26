/// <reference types="jest" />
import { DateTime, Duration, Interval } from 'luxon';

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualDateTime(expected: DateTime): R;
      toEqualInterval(expected: Interval): R;
      toEqualDuration(expected: Duration): R;
    }
  }
}

type LuxonMatchers = {
  [key in keyof jest.Matchers<void>]: jest.CustomMatcher;
};

declare let matchers: LuxonMatchers;
export default matchers;
