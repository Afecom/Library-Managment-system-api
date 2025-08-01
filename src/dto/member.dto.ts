import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty({ description: 'Member name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Member email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Member phone number' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Join date' })
  @IsDateString()
  join_date: string;
}

export class UpdateMemberDto {
  @ApiPropertyOptional({ description: 'Member name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Member email' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Member phone number' })
  @IsOptional()
  @IsString()
  phone?: string;
}

export class BorrowHistoryDto {
  @ApiProperty({ description: 'Member ID' })
  @IsString()
  member_id: string;
} 