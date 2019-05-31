import { SkeletonLoader } from './components/SkeletonLoader';
import { createPlugin } from '@bluebase/core';
export default createPlugin({
	key: 'ReactSkeletonPlugin',
	name: 'react-skeleton',

	components: {
		SkeletonLoader: SkeletonLoader,
	},
});
