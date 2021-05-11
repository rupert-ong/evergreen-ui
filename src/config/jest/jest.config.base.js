const { PACKAGE_SCOPE } = require('../constants');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.setup.ts'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$':
      '<rootDir>/src/config/jest/__mocks__/fileMock.ts',
    [new RegExp(`${PACKAGE_SCOPE}core-(.+)`)]:
      '<rootDir>/packages/core/core-$1/lib',
    [new RegExp(`${PACKAGE_SCOPE}(.+)`)]: '<rootDir>/packages/ui/$1/lib',
  },
};
