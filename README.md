# luxon-jest-matchers

[![Build Status](https://travis-ci.org/abalhier/luxon-jest-matchers.svg?branch=master)](https://travis-ci.org/abalhier/luxon-jest-matchers)

This library aims to provide custom assertions for Luxon with Jest runner

# Installation

```
yarn add --dev luxon-jest-matchers
```

# Setup

## Jest

In your jest.config.js :

```
setupFilesAfterEnv: ['luxon-jest-matchers']
```

## Typescript

You can add this at the beginning of your tests or in a definition file (.d.ts) you include in your tsconfig.json :

```
import 'luxon-jest-matchers';
```

# Available matchers

## DateTime

- toEqualDateTime(date: DateTime)
- toBeStrictlyBeforeDateTime(date: DateTime)
- toBeBeforeDateTime(date: DateTime)
- toBeStrictlyAfterDateTime(date: DateTime)
- toBeAfterDateTime(date: DateTime)
- toBeValidDateTime()
- toBeSameDateAs(date: DateTime)

## Duration

- toEqualDuration(duration: Duration)
- toEqualDurationAs(duration: Duration, unit: DurationUnit)
- toBeValidDuration()

## Interval

- toEqualInterval(interval: Interval)
- toEngulfInterval(interval: Interval)
- toContainDateTime(date: DateTime)
- toBeValidInterval()
