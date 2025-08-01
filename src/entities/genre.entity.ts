import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from './book.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Genre {
  @ApiProperty({ example: 1, description: 'Genre ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Fiction', description: 'Genre name' })
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Book, book => book.genre)
  books: Book[];
} 