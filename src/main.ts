import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exeption.filter';

async function start() {
  const PORT = Number(process.env.PORT) || 5000
  const app = await NestFactory.create(AppModule, { cors: true })
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())
  //app.setGlobalPrefix('api')
  await app.listen(PORT, () => console.log(`NEST on ${PORT}`))
}

start()