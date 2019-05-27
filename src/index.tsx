import { Skeletons } from './components/Skeleton';
import { createPlugin } from '@bluebase/core';
export default createPlugin({
	key: 'ReactSkeletonPlugin',
	name: 'react-skeleton',

	components: {
		Skeleton: Skeletons,
	},
});
