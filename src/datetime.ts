import { DateTime } from 'luxon';

export const toEqualDateTime = (received: DateTime, expected: DateTime) => {
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

export const toBeAfterDateTime = (left: DateTime, right: DateTime) => {
  const isAfter = left > right;

  if (isAfter) {
    return {
      message: () => `expected ${left} not to be after ${right}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${left} to be after ${right}`,
      pass: false,
    };
  }
};

export const toBeBeforeDateTime = (left: DateTime, right: DateTime) => {
  const isBefore = left < right;

  if (isBefore) {
    return {
      message: () => `expected ${left} not to be before ${right}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${left} to be before ${right}`,
      pass: false,
    };
  }
};
