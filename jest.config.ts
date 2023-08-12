import nextJest from "next/jest";
import { Config } from "jest"

const createJestConfig = nextJest({
  dir: "./"
})

const customJestConfig: Config = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  modulePathIgnorePatterns: ["node_modules/\\*\\/@types\\/next"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};



module.exports = createJestConfig(customJestConfig);