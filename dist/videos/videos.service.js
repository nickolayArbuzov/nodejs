"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const videos_entity_1 = require("./videos.entity");
let VideoService = class VideoService {
    constructor(videoRepository) {
        this.videoRepository = videoRepository;
    }
    async findAll() {
        return this.videoRepository.find();
    }
    async findOne(id) {
        return this.videoRepository.findOne(id);
    }
    async createVideo(dto) {
        const newVideo = new videos_entity_1.Video();
        newVideo.description = 'fds';
        newVideo.name = 'fdsdfd';
        const video = await this.videoRepository.insert(newVideo);
        return newVideo;
    }
    async deleteVideo(id) {
        await this.videoRepository.delete(id);
    }
    async deleteAllVideos() {
        await this.videoRepository.clear();
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('VIDEO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=videos.service.js.map