import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserMailIsExistRule, UserLoginIsExistRule } from './customValidateUser';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
    UserMailIsExistRule,
    UserLoginIsExistRule,
  ],
  exports: [userProviders.find(p => p.provide === 'USER_REPOSITORY')],
})
export class UserModule {}