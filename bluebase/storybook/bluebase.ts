import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';
import Plugin from '../../src';
// import router  from '@bluebase/plugin-react-router';
// TODO: Only for evaluation, remove this
import DummyPlugin from './sample';
import plugin from  "../../src/index"

/**
 * Add your platform specific configs here. 
 * We keep all the universal (cross platform) configs in 
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		// TODO: Only for evaluation, remove this
<<<<<<< HEAD
		plugin,
		DummyPlugin
		// Plugin,
		// Router
=======
		DummyPlugin,
		Plugin,
		// router
>>>>>>> 3ca3983b7c3d2f9d3884f1af7f7835fe38ad73cc
	],
	// config: {

	// 	wallpaper: {
	// 		backgroundColor: 'white',
	// 		resizeMode: 'cover',
	// 		source: require('./../../assets/storybook/wallpaper.jpg'),
	// 	},
	// }
};

export default deepmerge(commonBootOptions, bootOptions);
