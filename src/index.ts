import {
  toEqualDateTime,
  toBeStrictlyAfterDateTime,
  toBeAfterDateTime,
  toBeStrictlyBeforeDateTime,
  toBeBeforeDateTime,
  toBeValidDateTime,
  toBeSameDateAs,
} from './datetime';
import { toEqualDuration, toEqualDurationAs } from './duration';
import { toEqualInterval, toEngulfInterval, toContainDateTime } from './interval';

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
  toEqualInterval,
  toEngulfInterval,
};

if (expect !== undefined) {
  expect.extend(matchers);
} else {
  console.error('Jest expect variable not found : Check your setup');
}
