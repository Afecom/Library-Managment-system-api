import { IsString, IsNumber, IsOptional, Min, IsPositive } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @ApiProperty({ description: 'Book title' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Book author' })
  @IsString()
  author: string;

  @ApiProperty({ description: 'Publication year' })
  @IsNumber()
  @Min(1800)
  published_year: number;

  @ApiProperty({ description: 'Number of available copies' })
  @IsNumber()
  @IsPositive()
  available_copies: number;

  @ApiProperty({ description: 'Genre ID' })
  @IsNumber()
  genre_id: number;
}

export class UpdateBookDto {
  @ApiPropertyOptional({ description: 'Book title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Book author' })
  @IsOptional()
  @IsString()
  author?: string;

  @ApiPropertyOptional({ description: 'Publication year' })
  @IsOptional()
  @IsNumber()
  @Min(1800)
  published_year?: number;

  @ApiPropertyOptional({ description: 'Number of available copies' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  available_copies?: number;

  @ApiPropertyOptional({ description: 'Genre ID' })
  @IsOptional()
  @IsNumber()
  genre_id?: number;
}

export class FilterBookDto {
  @ApiPropertyOptional({ description: 'Filter by genre ID' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  genre_id?: number;

  @ApiPropertyOptional({ description: 'Filter by availability' })
  @IsOptional()
  available?: boolean;
} 