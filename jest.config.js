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
};
