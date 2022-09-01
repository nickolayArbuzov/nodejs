"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoProviders = void 0;
const videos_entity_1 = require("./videos.entity");
exports.videoProviders = [
    {
        provide: 'VIDEO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(videos_entity_1.Video),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=all-data.providers.js.map