import React from 'react';
import Skeleton from 'react-loading-skeleton';

export interface skeletonProps {
	width?: number,
	height?: number,
	circle?: boolean,
	duration?: number
}

export const Skeletons = (props: skeletonProps) => {

	return (
    <Skeleton  {...props} />
  );
};