import React from 'react';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';

import { Svg } from 'expo';

export interface skeletonProps {
	type?: 'Circle' | 'Rect',
	height?: number,
	width?: number,
	RectHorizontaly?: number,
	RectVerticaly?: number,
	RectHorizontalRadius?: number,
	RectVerticalRadius?: number,
	CircleHorizontaly?: number,
	CircleVerticaly?: number,
	CircleRadius?: number,
}

export const Skeletons = (props: skeletonProps) => {
	const { type } = props;
	return (
		<SvgAnimatedLinearGradient
			height={props.height ? props.height + 10 : ''}
		>
			{
				type === 'Circle'
					?
					<Svg.Circle
						cx={`${props.CircleHorizontaly}`}
						cy={`${props.CircleVerticaly}`}
						r={`${props.CircleRadius}`}
					//		width={`${props.width}`}
					//		height={`${props.height}`}
					/>
					:
					<Svg.Rect
						x={`${props.RectHorizontaly ? props.RectHorizontaly : ''}`}
						y={`${props.RectVerticaly ? props.RectVerticaly : ''}`}
						rx={`${props.RectHorizontalRadius ? props.RectHorizontalRadius : ''}`}
						ry={`${props.RectVerticalRadius ? props.RectVerticalRadius : ''}`}
						width={`${props.width ? props.width : ''}`}
						height={`${props.height ? props.height : ''}`}
					/>
			}
		</SvgAnimatedLinearGradient>
	);
};