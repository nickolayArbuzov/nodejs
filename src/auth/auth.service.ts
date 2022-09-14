import { Inject, Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  login(authDto: AuthDto) {
    console.log('authDto', authDto)
    this.userRepository.findOne({})
  }
  
}