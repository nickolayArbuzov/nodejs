"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloggerProviders = void 0;
const blogger_entity_1 = require("./blogger.entity");
exports.bloggerProviders = [
    {
        provide: 'BLOGGER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(blogger_entity_1.Blogger),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=blogger.providers.js.map