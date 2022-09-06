import { Module, forwardRef } from '@nestjs/common';
import { BloggerModule } from '../blogger/blogger.module';
import { DatabaseModule } from '../database/database.module';
import { PostController } from './post.controller';
import { postProviders } from './post.providers';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  imports: [DatabaseModule, BloggerModule],
  providers: [
    ...postProviders,
    PostService,
  ],
  exports: [PostService],
})
export class PostModule {}