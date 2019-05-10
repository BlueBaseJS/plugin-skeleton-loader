const configs = require('@bluebase/code-standards/jest.config');

module.exports = Object.assign(configs, {
	// setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
	testRegex: undefined,
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
  ]

	// transformIgnorePatterns: ['<rootDir>/node_modules/(!ol)'],
});
