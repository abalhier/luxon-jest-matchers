import {
  toEqualDateTime,
  toBeStrictlyAfterDateTime,
  toBeAfterDateTime,
  toBeStrictlyBeforeDateTime,
  toBeBeforeDateTime,
  toBeValidDateTime,
  toBeSameDateAs,
} from './datetime';
import { toEqualDuration, toEqualDurationAs, toBeValidDuration } from './duration';
import { toEqualInterval, toEngulfInterval, toContainDateTime, toBeValidInterval } from './interval';

const matchers = {
  toBeBeforeDateTime,
  toBeStrictlyBeforeDateTime,
  toBeStrictlyAfterDateTime,
  toBeAfterDateTime,
  toBeValidDateTime,
  toBeSameDateAs,
  toContainDateTime,
  toEqualDateTime,
  toEqualDuration,
  toEqualDurationAs,
  toBeValidDuration,
  toEqualInterval,
  toEngulfInterval,
  toBeValidInterval,
};

if (expect !== undefined) {
  expect.extend(matchers);
} else {
  console.error('Jest expect variable not found : Check your setup');
}
