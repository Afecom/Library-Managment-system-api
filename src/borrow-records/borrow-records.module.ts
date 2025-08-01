import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowRecordsService } from './borrow-records.service';
import { BorrowRecordsController } from './borrow-records.controller';
import { BorrowRecord } from '../entities/borrow-record.entity';
import { BooksModule } from '../books/books.module';
import { MembersModule } from '../members/members.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BorrowRecord]),
    BooksModule,
    MembersModule,
  ],
  controllers: [BorrowRecordsController],
  providers: [BorrowRecordsService],
  exports: [BorrowRecordsService],
})
export class BorrowRecordsModule {} 