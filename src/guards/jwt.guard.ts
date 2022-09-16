import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
    // add authService with jwtService(verify)
  ){}
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const user = this.jwtService.verify(request.headers?.authorization?.split(' ')[1])
    console.log('user-jwt', user)
    if (user){
      request.user = {id: user.id, login: user.login}
      return true;
    }
    throw new UnauthorizedException()
  }
}