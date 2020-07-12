// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleDirectories: [
    "node_modules",
    "lib"
  ],
  moduleFileExtensions: [
    "tsx",
    "ts",
    "jsx",
    "js",
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  "transform": {
    "^.+\\.[t|j]sx?$": "ts-jest",
    "^.+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  verbose: false,
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  prettierPath: '<rootDir>/node_modules/prettier',
  globals: {
    window: {

    }
  }
};
