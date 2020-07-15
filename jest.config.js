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
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\](?!@amcharts/).+\\.js$",
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
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
        // window: {},
        "ts-jest": {
            "tsConfig": '<rootDir>/tsconfig.json',
        }
    }
};
