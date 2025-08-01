import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://library-managment-system-frontend-omega.vercel.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  });

  await app.listen(3000);

  app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://library-managment-system-frontend-omega.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
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
