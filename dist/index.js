"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const SkeletonLoader_1 = require("./components/SkeletonLoader");
const core_1 = require("@bluebase/core");
tslib_1.__exportStar(require("./components/exports"), exports);
exports.default = core_1.createPlugin({
    key: 'skeleton-loader',
    name: 'Skeleton Loader Plugin',
    components: {
        SkeletonLoader: SkeletonLoader_1.SkeletonLoader,
    },
});
