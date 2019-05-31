import ContentLoader from 'react-content-loader';
import React from 'react';
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
		<>
			{type === 'Circle' ? (
				<ContentLoader>
					<circle
						cx={`${cx}`}
						cy={`${cy}`}
						r={`${r}`}
					/>
				</ContentLoader>
			) : (
					<ContentLoader>
						<rect
							x={`${x ? x : ''}`}
							y={`${y ? y : ''}`}
							rx={`${x ? rx : ''}`}
							ry={`${ry ? ry : ''}`}
							width={`${width ? width : ''}`}
							height={`${height ? height : ''}`}
						/>
					</ContentLoader>
				)}
		</>
	);
};
