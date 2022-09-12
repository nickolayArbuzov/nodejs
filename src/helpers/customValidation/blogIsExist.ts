import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Blogger } from "../../blogger/blogger.entity";
import { Repository } from "typeorm";

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
    constructor(private blogRepository: Repository<Blogger>) {}
  
    async validate(value: string) {
        console.log('value', value)
      try {
        const blog = await this.blogRepository.findOne({where: {id: value}});
        if(blog) {
            return false
        } else return true
      } catch (e) {
        return false;
      }
      return true;
    }
  
    defaultMessage(args: ValidationArguments) {
      return `User doesn't exist`;
    }
}