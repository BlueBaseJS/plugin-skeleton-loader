const configs = require('@bluebase/code-standards/jest.config');

module.exports = Object.assign(configs, {
	setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],

	transformIgnorePatterns: ['<rootDir>/node_modules/(!ol)'],
});
