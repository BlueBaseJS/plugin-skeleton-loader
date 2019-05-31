/// <reference types="react" />
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
export declare const SkeletonLoader: (props: SkeletonProps) => JSX.Element;
