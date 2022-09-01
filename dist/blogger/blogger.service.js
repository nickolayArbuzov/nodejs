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
exports.BloggerService = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("../posts/post.service");
const typeorm_1 = require("typeorm");
const blogger_entity_1 = require("./blogger.entity");
let BloggerService = class BloggerService {
    constructor(bloggerRepository, postService) {
        this.bloggerRepository = bloggerRepository;
        this.postService = postService;
    }
    async findAll() {
        return this.bloggerRepository.find({ relations: ['posts'] });
    }
    async createBlogger(dto) {
        const newBlogger = new blogger_entity_1.Blogger();
        newBlogger.name = dto.name;
        newBlogger.url = dto.url;
        const blogger = await this.bloggerRepository.insert(newBlogger);
        return blogger;
    }
    async deleteBlogger(id) {
        try {
            await this.bloggerRepository.delete(id);
            return "success";
        }
        catch (e) {
            return "fail";
        }
    }
};
BloggerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BLOGGER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        post_service_1.PostService])
], BloggerService);
exports.BloggerService = BloggerService;
//# sourceMappingURL=blogger.service.js.map