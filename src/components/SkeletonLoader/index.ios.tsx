import React from 'react';
import { Svg } from 'expo';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';

export interface SkeletonLoaderProps {
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
export const SkeletonLoader = (props: SkeletonLoaderProps) => {
	const { type, x, y, rx, ry, width, height, cx, cy, r } = props;
	return (
		<SvgAnimatedLinearGradient height={height ? height + 10 : ''}>
			{type === 'Circle' ? (
				<Svg.Circle cx={`${cx}`} cy={`${cy}`} r={`${r}`} />
			) : (
					<Svg.Rect
						x={`${x ? x : ''}`}
						y={`${y ? y : ''}`}
						rx={`${x ? rx : ''}`}
						ry={`${ry ? ry : ''}`}
						width={`${width ? width : ''}`}
						height={`${height ? height : ''}`}
					/>
				)}
		</SvgAnimatedLinearGradient>
	);
};
