import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PostController } from './post.controller';
import { postProviders } from './post.providers';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  imports: [DatabaseModule],
  providers: [
    ...postProviders,
    PostService,
  ],
  exports: [PostService],
})
export class PostModule {}