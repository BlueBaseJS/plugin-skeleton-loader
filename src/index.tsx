import { SkeletonLoader } from './components/SkeletonLoader';
import { createPlugin } from '@bluebase/core';

export * from './components/exports';

export default createPlugin({
	key: 'skeleton-loader',
	name: 'Skeleton Loader Plugin',

	components: {
		SkeletonLoader,
	},
});
