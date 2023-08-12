module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  modulePathIgnorePatterns: ["node_modules/\\*\\/@types\\/next"]
};