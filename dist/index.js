"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Skeleton_1 = require("./components/Skeleton");
const core_1 = require("@bluebase/core");
exports.default = core_1.createPlugin({
    key: 'ReactSkeletonPlugin',
    name: 'react-skeleton',
    components: {
        Skeleton: Skeleton_1.Skeletons,
    },
});
