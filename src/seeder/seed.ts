import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeederService } from './seeder.service';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seederService = app.get(SeederService);
  
  try {
    await seederService.seed();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}

seed(); 