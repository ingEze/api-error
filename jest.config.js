export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}

