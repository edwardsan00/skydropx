const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/reducers(.*)$': '<rootDir>/src/reducers/$1',
    '^@/store(.*)$': '<rootDir>/src/store/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
    '^@/constants(.*)$': '<rootDir>/src/constants/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
