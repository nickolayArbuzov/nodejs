import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { AuthDto, RegistrationConfirmationDto, RegistrationDto, RegistrationEmailResendingDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async login(dto: AuthDto) {
    const auth: User = await this.userRepository.findOne({where: {login: dto.login, password: dto.password}})
    if (auth) {
      const payload = {id: auth.id, login: auth.login}
      return {accessToken: this.jwtService.sign(payload)}
    } 
    else {
      throw new HttpException('Auth not found', HttpStatus.UNAUTHORIZED);
    }
  }

  async registration(dto: RegistrationDto) {
    console.log('registration', dto)
  }

  async registrationConfirmation(dto: RegistrationConfirmationDto) {
    console.log('registrationConfirmation', dto)
  }

  async registrationEmailResending(dto: RegistrationEmailResendingDto) {
    console.log('registrationEmailResending', dto)
  }
  
}