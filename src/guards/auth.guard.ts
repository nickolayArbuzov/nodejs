import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    console.log('request.headers.authorization', request.headers.authorization)
    if (!request.headers.authorization){
        console.log('no headers')
        return true
    }
    if (request.headers.authorization === new Buffer('admin:qwerty').toString('base64')){
        console.log('headers match')
        return true;
    }
    console.log('mismatch')
    throw new UnauthorizedException()
  }
}