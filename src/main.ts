import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://library-managment-system-frontend-omega.vercel.app',
    credentials: true, // Optional: allow cookies, authorization headers
  });

  // Enable validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('Library Manager API')
    .setDescription('A REST API for managing a library system with books, members, and borrowing operations')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentication operations')
    .addTag('books', 'Book management operations')
    .addTag('members', 'Member management operations')
    .addTag('borrow-records', 'Borrow and return operations')
    .addTag('genres', 'Genre management operations')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log('Library Manager API is running on http://localhost:3000');
  console.log('Swagger documentation is available at http://localhost:3000/api');
}
bootstrap();
