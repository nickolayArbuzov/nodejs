import { Inject, Injectable } from '@nestjs/common';
import { Blogger } from 'src/blogger/blogger.entity';
import { Repository } from 'typeorm';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

export function BlogIsExist(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'BlogIsExist',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: BlogIsExistsRule,
    });
  };
}

@ValidatorConstraint({ name: 'BlogIsExist', async: true })
@Injectable()
export class BlogIsExistsRule implements ValidatorConstraintInterface {
  constructor(
    private validateService: ValidateService
  ) {}

  async validate(value: string) {
    console.log('value', value)
    try {
      console.log('start-try')
      return await this.validateService.getBloggerById( value);
    } catch (e) {
      console.log('catch')
      return false;
    }

  }

  defaultMessage(args: ValidationArguments) {
    return `Blog doesn't exist`;
  }
  
}

@Injectable()
export class ValidateService{
  constructor(
    @Inject('BLOGGER_REPOSITORY') 
    private readonly blogRepository: Repository<Blogger>,
  ) {}

 async getBloggerById (value: string) {
  const blog = await this.blogRepository.findOne({where: {id: value}});
  if(!blog){
    return false
  }
  return true
 }
}
