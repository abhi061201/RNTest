module.exports = {
  preset: 'react-native',  // Uses React Native preset for Jest
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Use babel-jest to transform JS/TS files
  },
  testEnvironment: 'node',  // Set the test environment to Node.js
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],  // Specify file extensions to be handled by Jest
  // This is optional but can help with React Native testing
  globals: {
    __DEV__: true,  // Ensure that Jest runs in development mode
  },
  collectCoverage: true, // Enable code coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Specify directories to measure coverage
    '!src/**/*.d.ts', // Exclude type definition files
    '!src/**/index.{js,ts}', // Exclude index files
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // Coverage report formats
};
