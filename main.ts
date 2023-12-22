import { NestFactory } from '@nestjs/core';
import { AppModule } from './apps/tasks-status/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
