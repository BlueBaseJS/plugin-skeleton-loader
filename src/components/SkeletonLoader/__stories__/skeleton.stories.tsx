import React from 'react';
import { getComponent } from '@bluebase/core';
import { storiesOf } from '@storybook/react';

const SkeletonLoader = getComponent('SkeletonLoader');

storiesOf('skeleton', module)

	.add('rectangle skeleton ', () => {
		return (
			<SkeletonLoader
				rx={7}
				ry={7}
				type="Rect"
				height={90}
				width={200}

			/>
		);
	}
	)
	.add('circle skeleton ', () => {
		return (
			<SkeletonLoader
				cx={30}
				cy={30}
				r={30}
				type="Circle"


			/>
		);
	}
	);


