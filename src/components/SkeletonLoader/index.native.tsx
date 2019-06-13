import React from 'react';
import { Svg } from 'expo';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';

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
		<SvgAnimatedLinearGradient height={height} width={width}>
			{type === 'Circle' ? (
				<Svg.Circle cx={`${cx}`} cy={`${cy}`} r={`${r}`} />
			) : (
				<Svg.Rect
					x={`${x}`}
					y={`${y}`}
					rx={`${rx}`}
					ry={`${ry}`}
					width={`${width}`}
					height={`${height}`}
				/>
			)}
		</SvgAnimatedLinearGradient>
	);
};
