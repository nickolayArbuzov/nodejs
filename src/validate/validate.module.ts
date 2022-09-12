import { Module, forwardRef, Global } from '@nestjs/common';
import { BlogIsExistsRule, ValidateService } from './validate.service';
import { BloggerModule } from '../blogger/blogger.module';

@Global()
@Module({
  imports: [BloggerModule],
  providers: [
    ValidateService
  ],
})
export class ValidateModule {}
