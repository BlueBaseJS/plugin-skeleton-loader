const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = ({ config }) => {

	config = storybookWebpackConfigs(null, null, config);

	return config;
};
