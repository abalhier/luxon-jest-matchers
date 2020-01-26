import { DateTime } from 'luxon';
import luxonMatchers from './';

expect.extend(luxonMatchers);

describe('DateTime matchers', () => {
  it('should not pass when DateTimes are not equal', () => {
    const now = DateTime.local();
    const nowMinusOneSecond = DateTime.local().minus({ second: 1 });

    expect(now).not.toEqualDateTime(nowMinusOneSecond);
  });

  it('should pass when DateTimes are equal', () => {
    const now = DateTime.local();

    expect(now).toEqualDateTime(DateTime.fromMillis(now.toMillis()));
  });
});
