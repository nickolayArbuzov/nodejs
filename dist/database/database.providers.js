"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const blogger_entity_1 = require("../blogger/blogger.entity");
const user_entity_1 = require("../users/user.entity");
const post_entity_1 = require("../posts/post.entity");
const comment_entity_1 = require("../comments/comment.entity");
const videos_entity_1 = require("../videos/videos.entity");
const contact_entity_1 = require("../test/contact.entity");
const employee_entity_1 = require("../test/employee.entity");
const meeting_entity_1 = require("../test/meeting.entity");
const task_entity_1 = require("../test/task.entity");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASS,
                database: process.env.POSTGRES_DB,
                entities: [blogger_entity_1.Blogger, user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment, videos_entity_1.Video, contact_entity_1.Contact, employee_entity_1.Employee, meeting_entity_1.Meeting, task_entity_1.Task],
                synchronize: true,
                ssl: { rejectUnauthorized: false }
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map