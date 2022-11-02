module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
