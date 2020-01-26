module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: "./tsConfig.test.json"
    },
  },
};
