import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.userRepository.find();
    return users.map(u => {
      return {
        createdAt: u.createdAt,
        email: u.email,
        id: u.id,
        login: u.login,
      }
    })
  }

  async createUser(dto: CreateUserDto) {
    const newUser = new User()
    newUser.login = dto.login
    newUser.password = dto.password
    newUser.email = dto.email
    let date = new Date
    newUser.createdAt = date.toISOString()
    const user = await this.userRepository.insert(newUser);
    return {
      createdAt: newUser.createdAt,
      email: newUser.email,
      id: newUser.id,
      login: newUser.login,
    }
  }

  async deleteUser(id: string){
    const donorUser = await this.userRepository.findOne({where: {id: id}});
    if(donorUser) {
      await this.userRepository.delete(id)
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}