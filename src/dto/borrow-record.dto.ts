import { IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BorrowBookDto {
  @ApiProperty({ description: 'Book ID' })
  @IsNumber()
  book_id: number;

  @ApiProperty({ description: 'Member ID' })
  @IsNumber()
  member_id: number;

  @ApiProperty({ description: 'Due date' })
  @IsDateString()
  due_date: string;
}

export class ReturnBookDto {
  @ApiProperty({ description: 'Borrow record ID' })
  @IsNumber()
  borrow_record_id: number;
} 