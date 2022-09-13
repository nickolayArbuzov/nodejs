import { Global, Inject, Injectable } from '@nestjs/common';
import { Blogger } from './blogger.entity';
import { Repository } from 'typeorm';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { BloggerService } from './blogger.service';

export function BlogIsExist(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: BlogIsExistRule,
    });
  };
}

@ValidatorConstraint({ name: 'BlogIsExist', async: false })
@Injectable()
export class BlogIsExistRule implements ValidatorConstraintInterface {
  constructor(private blogService: BloggerService) {}

  async validate(value: string, context: any) {
    console.log('context', context)
    console.log('validate')
    try {
      console.log('try')
      const blog = await this.blogService.findOne(value)
      //const blog = await this.blogRepository.find({where: {id: value}});
      console.log('blog', blog)
    } catch (e) {
      console.log('catch')
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `User doesn't exist`;
  }
}


function Component() {
  throw new Error('Function not implemented.');
}

