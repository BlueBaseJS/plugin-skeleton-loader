import React from 'react';
import { View } from 'react-native';
import { getComponent } from '@bluebase/core';
import { storiesOf } from '@storybook/react';

const SkeletonLoader = getComponent('SkeletonLoader');

storiesOf('skeleton', module)

	.add('rectangle skeleton ', () => {
		return (
			<View style={{ marginTop: 50, marginLeft: 50 }} >
				<SkeletonLoader
					rx={7}
					ry={7}
					type="Rect"
					height={60}
					width={50}
				/>
			</View>
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


