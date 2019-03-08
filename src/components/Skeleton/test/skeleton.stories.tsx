import React from 'react';
import { storiesOf } from '@storybook/react';

import { getComponent } from '@bluebase/core';

const Skeleton = getComponent('skeleton');

storiesOf('skeleton', module)

	.add('rectangle skeleton ', () => {
		return (
			<Skeleton
				RectHorizontaly={7}
				RectVerticaly={7}
				type="Rect"
				height={90}
				width={200}

			/>
		);
	}
	)
	.add('circle skeleton ', () => {
		return (
			<Skeleton
				CircleVerticaly={3}
				CircleHorizontaly={3}
				type="Circle"
				circle={true}
				CircleRadius={3}
				height={20}
				width={40}

			/>
		);
	}
	);


