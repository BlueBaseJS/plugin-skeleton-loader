import ContentLoader from 'react-content-loader';
import React from 'react';
import { View } from '@bluebase/components';
export interface SkeletonProps {
	type?: 'Circle' | 'Rect';
	x?: number;
	y?: number;
	rx?: number;
	ry?: number;
	width?: number;
	height?: number;
	cx?: number;
	cy?: number;
	r?: number;
}

export const SkeletonLoader = (props: SkeletonProps) => {
	const { type, x, y, rx, ry, width, height, cx, cy, r } = props;

	return (
		<View style={{ height, width }}>
			{type === 'Circle' ? (
				<ContentLoader style={{ height, width }}>
					<circle cx={`${cx}`} cy={`${cy}`} r={`${r}`} />
				</ContentLoader>
			) : (
				<ContentLoader style={{ height, width }}>
					<rect
						x={`${x}`}
						y={`${y}`}
						rx={`${rx}`}
						ry={`${ry}`}
						width={`${width}`}
						height={`${height}`}
					/>
				</ContentLoader>
			)}
		</View>
	);
};
