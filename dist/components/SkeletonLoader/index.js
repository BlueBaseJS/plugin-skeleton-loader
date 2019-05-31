"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_content_loader_1 = tslib_1.__importDefault(require("react-content-loader"));
const react_1 = tslib_1.__importDefault(require("react"));
exports.SkeletonLoader = (props) => {
    const { type, x, y, rx, ry, width, height, cx, cy, r } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null, type === 'Circle' ? (react_1.default.createElement(react_content_loader_1.default, null,
        react_1.default.createElement("circle", { cx: `${cx}`, cy: `${cy}`, r: `${r}` }))) : (react_1.default.createElement(react_content_loader_1.default, null,
        react_1.default.createElement("rect", { x: `${x ? x : ''}`, y: `${y ? y : ''}`, rx: `${x ? rx : ''}`, ry: `${ry ? ry : ''}`, width: `${width ? width : ''}`, height: `${height ? height : ''}` })))));
};
