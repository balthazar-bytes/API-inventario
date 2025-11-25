import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Borra propiedades que no estén en el DTO (limpieza)
    forbidNonWhitelisted: true, // Lanza error si envían datos basura extra
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
