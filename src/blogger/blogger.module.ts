import { Module } from '@nestjs/common';
import { PostModule } from '../posts/post.module';
import { PostService } from '../posts/post.service';
import { DatabaseModule } from '../database/database.module';
import { BloggerController } from './blogger.controller';
import { bloggerProviders } from './blogger.providers';
import { BloggerService } from './blogger.service';

@Module({
  controllers: [BloggerController],
  imports: [DatabaseModule, PostModule],
  providers: [
    ...bloggerProviders,
    BloggerService,
  ],
  exports: [BloggerService],
})
export class BloggerModule {}