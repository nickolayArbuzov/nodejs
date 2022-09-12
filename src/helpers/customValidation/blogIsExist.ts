import { Inject, Injectable } from "@nestjs/common";
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
    constructor(@Inject('BLOGGER_REPOSITORY') private blogRepository: Repository<Blogger>) {}
  
    async validate(value: string) {
        console.log('value', value)
      try {
        console.log('start-try')
        const blog = await this.blogRepository.findOne({where: {id: value}});
        console.log('blog', blog)
        if(!blog) {
            return false
        }
      } catch (e) {
        console.log('catch')
        return false;
      }
      return true;
    }
    
    defaultMessage(args: ValidationArguments) {
      return `Blog doesn't exist`;
    }
}