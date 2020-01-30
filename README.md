# luxon-jest-matchers

[![Build Status](https://travis-ci.org/abalhier/luxon-jest-matchers.svg?branch=master)](https://travis-ci.org/abalhier/luxon-jest-matchers)

This library aims to provide custom assertions for Luxon with Jest runner

# Installation

```
yarn add --dev luxon-jest-matchers
```

# Setup

Just add this to your Jest setup file or before your tests :

```
import luxonMatchers from 'luxon-jest-matchers';

expect.extend(luxonMatchers);
```

Now you'll be able to use these assertions :

```
expect(aDateTime).toEqualDateTime(anotherDateTime);
...
expect(aDuration).toEqualDuration(anotherDuration);
...
expect(anInterval).toEqualInterval(anotherInterval);
```

# Available matchers

## DateTime

- toEqualDateTime(date: DateTime)
- toBeBeforeDateTime(date: DateTime)
- toBeAfterDateTime(date: DateTime)

## Duration

- toEqualDuration(duration: Duration)
- toEqualDurationAsMinutes(duration: Duration)

## Interval

- toEqualInterval(interval: Interval)
- toEngulfInterval(interval: Interval)
