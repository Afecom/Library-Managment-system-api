import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({ example: 'Fiction', description: 'Genre name' })
  @IsString()
  name: string;
} 