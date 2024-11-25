import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //checks to ensure that only properties within our DTOs are processed
    forbidNonWhitelisted: true, //forbids additional properties sent with the body request
    transform: true, //this transforms incoming request to an instance of the DTO class after validation
  })) //to add global validation
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
