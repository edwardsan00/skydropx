const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
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
