const {
  generatePackageJestConfig,
} = require('../../../src/config/jest/jest.utils');
const { CORE_MODULE } = require('../../../src/config/constants');
const packageName = require('./package.json').name.split('/').pop();

module.exports = generatePackageJestConfig(packageName, CORE_MODULE);
