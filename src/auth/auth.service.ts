import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async login(authDto: AuthDto) {
    const auth: User = await this.userRepository.findOne({where: {login: authDto.login, password: authDto.password}})
    if (auth) {
      const payload = {email: auth.email, login: auth.login}
      return {token: this.jwtService.sign(payload)}
    } 
    else {
      throw new HttpException('Auth not found', HttpStatus.UNAUTHORIZED);
    }
  }
  
}