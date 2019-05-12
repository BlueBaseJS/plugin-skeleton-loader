import React from 'react';
import { storiesOf } from '@storybook/react';

import { getComponent } from '@bluebase/core';

const Skeleton = getComponent('Skeleton');

storiesOf('skeleton', module)

	.add('rectangle skeleton ', () => {
		return (
			<Skeleton
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
			<Skeleton
				cx={30}
				cy={30}
				r={30}
				type="Circle"


			/>
		);
	}
	);


