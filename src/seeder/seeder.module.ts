import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { Genre } from '../entities/genre.entity';
import { Book } from '../entities/book.entity';
import { Member } from '../entities/member.entity';
import { Staff } from '../entities/staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre, Book, Member, Staff])],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {} 