"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProviders = void 0;
const post_entity_1 = require("./post.entity");
exports.postProviders = [
    {
        provide: 'POST_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(post_entity_1.Post),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=post.providers.js.map