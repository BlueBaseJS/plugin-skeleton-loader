"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SkeletonLoader_1 = require("./components/SkeletonLoader");
const core_1 = require("@bluebase/core");
exports.default = core_1.createPlugin({
    description: 'A BlueBase plugin boilerplate!',
    key: 'skeleton-loader',
    name: 'Skeleton Loader',
    version: '1.0.0',
    components: {
        SkeletonLoader: SkeletonLoader_1.SkeletonLoader,
    },
});
