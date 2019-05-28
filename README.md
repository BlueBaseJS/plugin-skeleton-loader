<div align="center">
	<img width=125 height=125 src="assets/common/logo.png">
  <h1>
		plugin-skeleton-loader
	</h1>
  <p>A BlueBase plugin!</p>
</div>

## Description: 
Skeleton Loader is a component which is used to display a splash screen to indicate that the screen is loading.

## Usage

```
<Skeleton
    rx={7}
    ry={7}
    type="Rect"
    height={60}
    width={50}
/>
```

## ScreenShots
|                                        🌏 Web                                        |                                      🖥 Android                                      |                                          📱 IOS                                          |
| :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| <img src="./src/components/Skeleton/screenshot/SkeletonLoader_web.png" width="180"/> | <img src="./src/components/Skeleton/screenshot/SkeletonLoader_ios.png" width="180"/> | <img src="./src/components/Skeleton/screenshot/SkeletonLoader_android.png" width="180"/> |

## Component Props

|  Prop  |      Types      | Default |              Comments              |
| :----: | :-------------: | :-----: | :--------------------------------: |
|   x    |     number      |         |          length of x-axis          |
|   y    |     number      |         |          length of y-axis          |
|   rx   |     number      |         |  Length of x-axis it type is Rect  |
|   ry   |     number      |         |  Length of y-axis it type is Rect  |
| width  |     number      |         |               Width                |
| height |     number      |         |               Height               |
|   cx   |     number      |         | Length of x-axis it type is Circle |
|   cy   |     number      |         | Length of y-axis it type is Circle |
|   r    |     number      |         |          Radius if Circle          |
|  type  | ️Circle \| Rect |         |             Shape Type             |

## User Stories

|                   Story                    | In Storybook | Has Unit Test |
| :----------------------------------------: | :----------: | :-----------: |
| it should render rectangle skeleton screen |      ✅       |       ✅       |
|  it should render circle skeleton screen   |      ✅       |       ✅       |