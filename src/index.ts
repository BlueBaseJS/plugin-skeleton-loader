import { SkeletonLoader } from './components/SkeletonLoader';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'A BlueBase plugin boilerplate!',
	key: 'skeleton-loader',
	name: 'Skeleton Loader',
	version: '1.0.0',

	components: {
		SkeletonLoader: SkeletonLoader,
	},
});
