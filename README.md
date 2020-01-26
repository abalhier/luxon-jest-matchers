# luxon-jest-matchers

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
