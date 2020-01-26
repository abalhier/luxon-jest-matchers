module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: "tsconfig.test.json"
    },
  },
};
