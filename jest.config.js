module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: "<rootDir>/tsConfig.test.json"
    },
  },
};
