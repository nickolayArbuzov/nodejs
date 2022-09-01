"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const videos_controller_1 = require("./videos.controller");
const videos_providers_1 = require("./videos.providers");
const videos_service_1 = require("./videos.service");
let VideoModule = class VideoModule {
};
VideoModule = __decorate([
    (0, common_1.Module)({
        controllers: [videos_controller_1.VideoController],
        imports: [database_module_1.DatabaseModule],
        providers: [
            ...videos_providers_1.videoProviders,
            videos_service_1.VideoService,
        ],
        exports: [videos_service_1.VideoService]
    })
], VideoModule);
exports.VideoModule = VideoModule;
//# sourceMappingURL=videos.module.js.map