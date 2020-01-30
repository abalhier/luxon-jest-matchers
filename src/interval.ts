import { Interval, DateTime } from 'luxon';

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

export const toEngulfInterval = (received: Interval, expected: Interval) => {
  const doEngulf = received.engulfs(expected);

  if (doEngulf) {
    return {
      message: () => `expected ${received} not to engulf ${expected}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to engulf ${expected}`,
      pass: false,
    };
  }
};

export const toContainDateTime = (received: Interval, expected: DateTime) => {
  const isContained = received.contains(expected);

  if (isContained) {
    return {
      message: () => `expected ${received} not to contain ${expected}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to contain ${expected}`,
      pass: false,
    };
  }
};
