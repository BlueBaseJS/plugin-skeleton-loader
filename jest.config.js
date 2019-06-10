const configs = require("@bluebase/code-standards/jest.config");

module.exports = Object.assign(configs, {
	// setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
  ],
  testEnvironment: "jsdom",
  verbose: true,
  testURL: "http://localhost/",

	// transformIgnorePatterns: ['<rootDir>/node_modules/(!ol)'],
});
