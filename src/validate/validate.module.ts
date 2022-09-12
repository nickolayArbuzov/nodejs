import { Module, forwardRef } from '@nestjs/common';
import { BlogIsExistsRule } from './validate.service';
import { BloggerModule } from '../blogger/blogger.module';

@Module({
  imports: [BloggerModule],
  providers: [
    BlogIsExistsRule,
  ],
})
export class ValidateModule {}
