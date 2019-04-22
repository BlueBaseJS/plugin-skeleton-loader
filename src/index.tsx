import { Skeletons } from './components/Skeleton';
import { createPlugin } from '@bluebase/core';
import React from 'react';
export default createPlugin({
	key: 'ReactSkeletonPlugin',
	name: 'react-skeleton',

	components: {
		//	Skeleton: Skeletons,
		HomeScreen: () => <Skeletons cx={30} cy={30} r={30} type="Circle" />,
	},
});
