module.exports = {
  testEnvironment: "jsdom",

  moduleFileExtensions: ["js", "jsx"],

  testMatch: [
    "**/?(*.)+(test).[jt]s?(x)"
  ],

  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/test/__mocks__/fileMock.js"
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js"
  ],

  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/"
  ]
}
