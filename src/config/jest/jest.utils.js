const baseConfig = require('./jest.config.base');

const generatePackageJestConfig = (packageName, moduleName = 'ui') => ({
  ...baseConfig,
  roots: [`<rootDir>/packages/${moduleName}/${packageName}`],
  collectCoverageFrom: [
    `<rootDir>/packages/${moduleName}/${packageName}/lib/**/*.{ts,tsx,js,jsx}`,
  ],
  coverageDirectory: `<rootDir>/packages/${moduleName}/${packageName}/reports/coverage/`,
  moduleDirectories: ['node_modules'],
  modulePaths: [`<rootDir>/packages/${moduleName}/${packageName}/lib/`],
  name: packageName,
  displayName: packageName,
  rootDir: '../../..',
});

module.exports = {
  generatePackageJestConfig,
};
