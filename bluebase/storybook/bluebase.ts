import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';
// import Plugin from '../../src';
// import {Router} from '@bluebase/plugin-react-router';
// TODO: Only for evaluation, remove this
import DummyPlugin from './sample';

/**
 * Add your platform specific configs here. 
 * We keep all the universal (cross platform) configs in 
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		// TODO: Only for evaluation, remove this
		DummyPlugin
		// Plugin,
		// Router
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
