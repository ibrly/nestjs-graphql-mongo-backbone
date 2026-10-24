import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnv } from './config/env.validation';

async function bootstrap() {
  const { port } = validateEnv(process.env);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
