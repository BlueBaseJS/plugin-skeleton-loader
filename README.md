<div align="center">
	<img width=125 height=125 src="assets/common/logo.png">
  <h1>
		plugin-skeleton-loader
	</h1>
  <p>A BlueBase that provides a SkeletonLoader component.</p>
</div>

## Description:

Skeleton Loader is a component which is used to display a splash screen to indicate that the screen is loading.

## Usage

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/skeleton-loader.svg?style=flat)](https://npmjs.org/package/skeleton-loader "View this project on npm")
[![Build Status](https://travis-ci.com/BlueBaseJS/plugin-skeleton-loader.svg?branch=master)](https://travis-ci.com/BlueBaseJS/plugin-skeleton-loader)
[![codecov](https://codecov.io/gh/BlueBaseJS/plugin-skeleton-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/BlueBaseJS/plugin-skeleton-loader)
[![Greenkeeper badge](https://badges.greenkeeper.io/BlueBaseJS/plugin-skeleton-loader.svg)](https://greenkeeper.io/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BlueBaseJS/plugin-skeleton-loader/blob/master/CONTRIBUTING.md)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3c79162871414b6aa7c15d1a423adeca)](https://www.codacy.com/app/BlueBaseJS/plugin-skeleton-loader?utm_source=github.com&utm_medium=referral&utm_content=BlueBaseJS/plugin-skeleton-loader&utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/BlueBaseJS/plugin-skeleton-loader/badge.svg)](https://snyk.io/test/github/BlueBaseJS/plugin-skeleton-loader)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## ScreenShots

|                                        🌏 Web                                        |                                      🖥 Android                                      |                                          📱 IOS                                          |
| :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| <img src="./src/components/Skeleton/screenshot/SkeletonLoader_web.png" width="180"/> | <img src="./src/components/Skeleton/screenshot/SkeletonLoader_ios.png" width="180"/> | <img src="./src/components/Skeleton/screenshot/SkeletonLoader_android.png" width="180"/> |

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :----: | :---------: | :-------------: |
|    ✅   |      ✅      |        ❌        |

|  Prop  |      Types      | Default |              Comments              |
| :----: | :-------------: | :-----: | :--------------------------------: |
|    x   |      number     |         |          length of x-axis          |
|    y   |      number     |         |          length of y-axis          |
|   rx   |      number     |         |  Length of x-axis it type is Rect  |
|   ry   |      number     |         |  Length of y-axis it type is Rect  |
|  width |      number     |         |                Width               |
| height |      number     |         |               Height               |
|   cx   |      number     |         | Length of x-axis it type is Circle |
|   cy   |      number     |         | Length of y-axis it type is Circle |
|    r   |      number     |         |          Radius if Circle          |
|  type  | ️Circle \| Rect |         |             Shape Type             |

-   [Storybook](https://BlueBaseJS.github.io/plugin-skeleton-loader/storybook/)
-   [API Docs](https://BlueBaseJS.github.io/plugin-skeleton-loader/)