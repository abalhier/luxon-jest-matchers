import { Duration } from 'luxon';

export const toEqualDuration = (received: Duration, expected: Duration) => innerToEqualDuration(received, expected, (r, e) => r.equals(e));

export const toEqualDurationAsMinutes = (received: Duration, expected: Duration) =>
  innerToEqualDuration(received, expected, (r, e) => r.as('minute') === e.as('minute'));

const innerToEqualDuration = (received: Duration, expected: Duration, equals: (d1: Duration, d2: Duration) => boolean) => {
  const areEqual = equals(received, expected);

  if (areEqual) {
    return {
      message: () => `expected ${received} not to equal ${expected}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to equal ${expected}`,
      pass: false,
    };
  }
};
