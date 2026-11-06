import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnv } from './config/env.validation';

async function bootstrap() {
  const { port } = validateEnv(process.env);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
// Print config errors as a plain message instead of an unhandled-rejection stack trace.
bootstrap().catch((error: Error) => {
  console.error(error.message);
  process.exit(1);
});
