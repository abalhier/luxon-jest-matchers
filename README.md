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
import 'luxon-jest-matchers';
```

# Available matchers

## DateTime

- toEqualDateTime(date: DateTime)
- toBeBeforeDateTime(date: DateTime)
- toBeAfterDateTime(date: DateTime)
- toBeValidDateTime()
- toBeSameDateAs(date: DateTime)

## Duration

- toEqualDuration(duration: Duration)
- toEqualDurationAs(duration: Duration, unit: DurationUnit)

## Interval

- toEqualInterval(interval: Interval)
- toEngulfInterval(interval: Interval)
- toContainDateTime(date: DateTime)
