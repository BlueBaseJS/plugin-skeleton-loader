"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Skeleton_1 = require("./components/Skeleton");
const core_1 = require("@bluebase/core");
const react_1 = tslib_1.__importDefault(require("react"));
exports.default = core_1.createPlugin({
    key: 'ReactSkeletonPlugin',
    name: 'react-skeleton',
    components: {
        Skeleton: Skeleton_1.Skeletons,
        HomeScreen: () => react_1.default.createElement(Skeleton_1.Skeletons, { cx: 30, cy: 30, r: 30, type: "Circle" }),
    },
});
