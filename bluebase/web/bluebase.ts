import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';
import Plugin from '../../src'

/**
 * Add your platform specific configs here. 
 * We keep all the universal (cross platform) configs in 
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {
	plugins : [
		Plugin
	]

	// config: {

	// 	wallpaper: {
	// 		backgroundColor: 'white',
	// 		resizeMode: 'cover',
	// 		source: require('./../../assets/web/wallpaper.png'),
	// 	},
	// }
};

export default deepmerge(commonBootOptions, bootOptions);
