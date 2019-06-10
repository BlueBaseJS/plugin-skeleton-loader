<div align="center">
  <h1>
		plugin-skeleton-loader
	</h1>
  <p>A BlueBase that provides a SkeletonLoader component.</p>
</div>

## Description:

Skeleton Loader is a component which is used to display a splash screen to indicate that the screen is loading.

## Usage

    <SkeletonLoader
        rx={7}
    	ry={7}
    	type="Rect"
    	height={60}
    	width={50}
    />

## ScreenShots

|                             🌏 Web                            |                           🖥 Android                          |                               📱 IOS                              |
| :-----------------------------------------------------------: | :-----------------------------------------------------------: | :---------------------------------------------------------------: |
| <img src="../screenshot/SkeletonLoader_web.png" width="180"/> | <img src="../screenshot/SkeletonLoader_ios.png" width="180"/> | <img src="../screenshot/SkeletonLoader_android.png" width="180"/> |

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
