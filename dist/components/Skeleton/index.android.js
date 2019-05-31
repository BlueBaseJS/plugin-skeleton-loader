var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeletons = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvgAnimatedLinearGradient = _interopRequireDefault(
  require("react-native-svg-animated-linear-gradient")
);
var _expo = require("expo");
var _jsxFileName =
  "/home/qasimkhan/projects/Bluebase/plugin-skeleton-loader/src/components/Skeleton/index.android.tsx";
var Skeletons = function Skeletons(props) {
  var type = props.type,
    x = props.x,
    y = props.y,
    rx = props.rx,
    ry = props.ry,
    width = props.width,
    height = props.height,
    cx = props.cx,
    cy = props.cy,
    r = props.r;
  return _react.default.createElement(
    _reactNativeSvgAnimatedLinearGradient.default,
    {
      height: height ? height + 10 : "",
      __source: { fileName: _jsxFileName, lineNumber: 19 }
    },
    type === "Circle"
      ? _react.default.createElement(_expo.Svg.Circle, {
          cx: "" + cx,
          cy: "" + cy,
          r: "" + r,
          __source: { fileName: _jsxFileName, lineNumber: 21 }
        })
      : _react.default.createElement(_expo.Svg.Rect, {
          x: "" + (x ? x : ""),
          y: "" + (y ? y : ""),
          rx: "" + (x ? rx : ""),
          ry: "" + (ry ? ry : ""),
          width: "" + (width ? width : ""),
          height: "" + (height ? height : ""),
          __source: { fileName: _jsxFileName, lineNumber: 29 }
        })
  );
};
exports.Skeletons = Skeletons;
