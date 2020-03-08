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

export const toBeStrictlyAfterDateTime = (left: DateTime, right: DateTime) => {
  const isAfter = left > right;

  if (isAfter) {
    return {
      message: () => `expected ${left} not to be strictly after ${right}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${left} to be strictly after ${right}`,
      pass: false,
    };
  }
};

export const toBeAfterDateTime = (left: DateTime, right: DateTime) => {
  const isAfterOrEqual = left >= right;

  if (isAfterOrEqual) {
    return {
      message: () => `expected ${left} not to be after or equal to ${right}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${left} to be after or equal to ${right}`,
      pass: false,
    };
  }
};

export const toBeStrictlyBeforeDateTime = (left: DateTime, right: DateTime) => {
  const isBefore = left < right;

  if (isBefore) {
    return {
      message: () => `expected ${left} not to be strictly before ${right}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${left} to be strictly before ${right}`,
      pass: false,
    };
  }
};

export const toBeBeforeDateTime = (left: DateTime, right: DateTime) => {
  const isBefore = left <= right;

  if (isBefore) {
    return {
      message: () => `expected ${left} not to be before or equal to ${right}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${left} to be before or equal to ${right}`,
      pass: false,
    };
  }
};

export const toBeValidDateTime = (received: DateTime) => {
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

export const toBeSameDateAs = (received: DateTime, expected: DateTime) => {
  const areSameDate = received.toISODate() === expected.toISODate();

  if (areSameDate) {
    return {
      message: () => `expected ${received} not to be same date as ${expected}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to be same date as ${expected}`,
      pass: false,
    };
  }
};
