import React from 'react';
import ContentLoader from 'react-content-loader';
export interface skeletonProps {
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

export const Skeletons = (props: skeletonProps) => {
	const { type, x, y, rx, ry, width, height, cx, cy, r } = props;

	return (
		<>
			{type === 'Circle' ? (
				<ContentLoader>
					<circle
						cx={`${cx}`}
						cy={`${cy}`}
						r={`${r}`}
						//		width={`${props.width}`}
						//		height={`${props.height}`}
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
