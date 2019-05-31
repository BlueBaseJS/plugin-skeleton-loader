import { BootOptions } from "@bluebase/core";
// TODO: Only for evaluation, remove this
import DummyPlugin from "./sample";
import commonBootOptions from "../common/bluebase";
import deepmerge from "deepmerge";
import skeleton from "../../src/";

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {
	plugins: [
		skeleton,
		// TODO: Only for evaluation, remove this
		DummyPlugin
	]
	// config: {

	// 	wallpaper: {
	// 		backgroundColor: 'white',
	// 		resizeMode: 'cover',
	// 		source: require('./../../assets/storybook/wallpaper.jpg'),
	// 	},
	// }
};

export default deepmerge(commonBootOptions, bootOptions);
