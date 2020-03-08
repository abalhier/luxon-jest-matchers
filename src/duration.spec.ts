import { Duration } from 'luxon';
import './';

describe('Duration matchers', () => {
  describe('toEqualDuration', () => {
    it('should not pass when Durations are not equal', () => {
      const oneHour = Duration.fromObject({ hour: 1 });
      const oneHourAndHalf = Duration.fromObject({ hour: 1, minute: 30 });

      expect(oneHour).not.toEqualDuration(oneHourAndHalf);
      expect(oneHour).not.toEqualDurationAs(oneHourAndHalf, 'minute');
    });

    it('should pass when Durations are equal as minutes', () => {
      const oneHour = Duration.fromObject({ hour: 1 });
      const sixtyMinutes = Duration.fromObject({ minute: 60 });

      expect(oneHour).toEqualDurationAs(sixtyMinutes, 'minute');
      expect(oneHour).not.toEqualDuration(sixtyMinutes);
    });

    it('should pass when Durations are strictly equal', () => {
      const oneHour = Duration.fromObject({ hour: 1 });

      expect(oneHour).toEqualDurationAs(Duration.fromObject({ hour: 1 }), 'minute');
      expect(oneHour).toEqualDuration(Duration.fromObject({ hour: 1 }));
    });
  });

  describe('toBeValidDuration', () => {
    it('should not pass when duration is not valid', () => {
      expect('not a Duration').not.toBeValidDuration();
      expect(Duration.invalid('reason')).not.toBeValidDuration();
    });

    it('should pass when duration is valid', () => {
      expect(Duration.fromObject({ hour: 3 })).toBeValidDuration();
    });
  });
});
