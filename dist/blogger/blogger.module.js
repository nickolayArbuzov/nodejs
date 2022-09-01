"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloggerModule = void 0;
const common_1 = require("@nestjs/common");
const post_module_1 = require("../posts/post.module");
const database_module_1 = require("../database/database.module");
const blogger_controller_1 = require("./blogger.controller");
const blogger_providers_1 = require("./blogger.providers");
const blogger_service_1 = require("./blogger.service");
let BloggerModule = class BloggerModule {
};
BloggerModule = __decorate([
    (0, common_1.Module)({
        controllers: [blogger_controller_1.BloggerController],
        imports: [database_module_1.DatabaseModule, post_module_1.PostModule],
        providers: [
            ...blogger_providers_1.bloggerProviders,
            blogger_service_1.BloggerService,
        ],
    })
], BloggerModule);
exports.BloggerModule = BloggerModule;
//# sourceMappingURL=blogger.module.js.map