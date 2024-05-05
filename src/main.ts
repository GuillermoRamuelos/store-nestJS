import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activating the global validation pipe in order to use the validation decorators
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove the data from the payload that is not in the DTO
      forbidNonWhitelisted: true, // If the payload has data that is not in the DTO, throw an error
      //Note: Only one of the above two options is needed
    }),
  );

  await app.listen(3000);
}
bootstrap();
