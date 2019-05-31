<<<<<<< HEAD
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



=======
<div align="center">
	<img width=125 height=125 src="assets/common/logo.png">
  <h1>
		plugin-skeleton-loader
	</h1>
  <p>A BlueBase that provides a SkeletonLoader component.</p>
</div>

<hr />

## 🎊 Status

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/skeleton-loader.svg?style=flat)](https://npmjs.org/package/skeleton-loader 'View this project on npm')
[![Build Status](https://travis-ci.com/BlueBaseJS/plugin-skeleton-loader.svg?branch=master)](https://travis-ci.com/BlueBaseJS/plugin-skeleton-loader)
[![codecov](https://codecov.io/gh/BlueBaseJS/plugin-skeleton-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/BlueBaseJS/plugin-skeleton-loader)
[![Greenkeeper badge](https://badges.greenkeeper.io/BlueBaseJS/plugin-skeleton-loader.svg)](https://greenkeeper.io/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BlueBaseJS/plugin-skeleton-loader/blob/master/CONTRIBUTING.md)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3c79162871414b6aa7c15d1a423adeca)](https://www.codacy.com/app/BlueBaseJS/plugin-skeleton-loader?utm_source=github.com&utm_medium=referral&utm_content=BlueBaseJS/plugin-skeleton-loader&utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/BlueBaseJS/plugin-skeleton-loader/badge.svg)](https://snyk.io/test/github/BlueBaseJS/plugin-skeleton-loader)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## 🤝 Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :--------: | :-------------: |
|   ✅   |     ✅     |       ❌        |

## Docs

- [Storybook](https://BlueBaseJS.github.io/plugin-skeleton-loader/storybook/)
- [API Docs](https://BlueBaseJS.github.io/plugin-skeleton-loader/)
>>>>>>> 3ca3983b7c3d2f9d3884f1af7f7835fe38ad73cc
