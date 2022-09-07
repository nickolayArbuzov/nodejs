import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    if (!request.headers.authorization){
        return true
    }
    if (request.headers.authorization === new Buffer('admin:qwerty').toString('base64')){
        return true;
    }
    throw new UnauthorizedException()
  }
}