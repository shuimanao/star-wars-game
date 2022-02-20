module.exports = {
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
    '!src/types.ts',
    '!src/mocks/*.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'svg'],
  testEnvironment: 'jsdom',
};
