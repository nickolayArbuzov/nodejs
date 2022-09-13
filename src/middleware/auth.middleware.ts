import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { Blogger } from '../blogger/blogger.entity'
import { Repository } from 'typeorm'
import { BloggerService } from '../blogger/blogger.service'



@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private blogService: BloggerService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('req', req.route.path)
    const errorResponse = {
      errorsMessages: [],
    }
    let blog
    if(req.route.path === '/posts') {
      if (req.body.title?.trim().length < 1 || req.body.title?.trim().length > 30 || !req.body.title){
        errorResponse.errorsMessages.push({ message: 'error', field: "title"})
      } 
      if (req.body.shortDescription?.trim().length < 1 || req.body.shortDescription?.trim().length > 100 || !req.body.shortDescription){
        errorResponse.errorsMessages.push({ message: 'error', field: "shortDescription"})
      }
      if (req.body.content?.trim().length < 1 || req.body.content?.trim().length > 1000 || !req.body.content){
        errorResponse.errorsMessages.push({ message: 'error', field: "content"})
      }
      if (req.body.blogId) {
        
        blog = await this.blogService.findOne(req.body.blogId)
        console.log('blog',blog)
      }
      if (!blog){
        errorResponse.errorsMessages.push({ message: 'error', field: "blogId"})
      }
      if (errorResponse.errorsMessages.length > 0) {
        res.status(400).json(errorResponse)
      }else {
        next()
      }
    }
  
    else {
      next()
    }
  }
}