import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { Member } from '../entities/member.entity';
import { BorrowRecord } from '../entities/borrow-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member, BorrowRecord])],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],
})
export class MembersModule {} 