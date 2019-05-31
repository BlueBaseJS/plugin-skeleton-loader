"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SkeletonLoader_1 = require("./components/SkeletonLoader");
const core_1 = require("@bluebase/core");
exports.default = core_1.createPlugin({
    key: 'ReactSkeletonPlugin',
    name: 'react-skeleton',
    components: {
        SkeletonLoader: SkeletonLoader_1.SkeletonLoader,
    },
});
