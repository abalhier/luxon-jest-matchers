import { Interval } from 'luxon';

export const toEqualInterval = (received: Interval, expected: Interval) => {
  const areEqual = received.equals(expected);

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