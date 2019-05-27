# Skeleton Loader

## Description: 
Skeleton Loader is a component which is used to display a splash screen to indicate that the screen is loading.

## Usage/Code

```
export const SkeletonLoader = (props: SkeletonLoaderProps) => {
    const { type, x, y, rx, ry, width, height, cx, cy, r } = props;

    return (
        <>
            {type === 'Circle' ? (
                <ContentLoader>
                    <circle
                        cx={`${cx}`}
                        cy={`${cy}`}
                        r={`${r}`}
                        //      width={`${props.width}`}
                        //      height={`${props.height}`}
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
```

## ScreenShots
| 🌏 Web | 🖥 Android | 📱 IOS |
| :----: | :---------: | :-------------: |
|<img src="./src/components/Skeleton/screenshot/Screenshotweb1.png" width="180"/> | | |

## Component Style

| Name | Type | Description |
| :-------: | :---------: | :-----------------------------------: |
| type | ️circle | These styles are applied on content |
| type | Rect ️ | These styles are applied on status |

## Component Props

| Prop | Types | Default| Comments |
| :---: | :-----:| :-----: | :--------------------------: |
| type | number | | type of skeleton loader|
| x | number | | |
| y | number | | |
| rx | number | | |
| ry | number | | |
| width | number | | |
| height | number | | |
| cx | number | | |
| cy | number | | |
| r | number | | |

## User Stories

| Story | In Storybook | Has Unit Test |
| :-------------------------------------------------------------: | :----------: | :-----------: |
|it should render rectangle skeleton screen | ✅ | ✅ |
|it should render circle skeleton screen | ✅ | ✅ | 



