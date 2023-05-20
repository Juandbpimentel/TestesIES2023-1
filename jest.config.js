/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  
  clearMocks: true,
  coverageProvider: "v8",
  rootDir: './',
   roots: [
     "<rootDir>/src"
  ],
  testMatch: [
  "**/testes/**/*.[jt]s?(x)",
     "**/?(*.)+(spec|test).[tj]s?(x)"
   ],
};
