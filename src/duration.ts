import { Duration, DurationUnit } from 'luxon';

export const toEqualDuration = (received: Duration, expected: Duration) => innerToEqualDuration(received, expected, (r, e) => r.equals(e));

export const toEqualDurationAs = (received: Duration, expected: Duration, unit: DurationUnit) =>
  innerToEqualDuration(received, expected, (r, e) => r.as(unit) === e.as(unit));

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

export const toBeValidDuration = (received: Duration) => {
  if (received.isValid) {
    return {
      message: () => `expected ${received} not to be valid `,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to be valid`,
      pass: false,
    };
  }
};
