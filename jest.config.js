const baseConfig = require('./src/config/jest/jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/*/jest.config.js'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/*/lib/**/*.{ts,tsx,js,jsx}',
    '!**/*.stor(y|ies).*',
  ],
  coverageDirectory: '<rootDir>/reports/coverage/',
};
