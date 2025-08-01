import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Genre } from './genre.entity';
import { BorrowRecord } from './borrow-record.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  published_year: number;

  @Column({ default: 1 })
  available_copies: number;

  @ManyToOne(() => Genre, genre => genre.books)
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;

  @Column()
  genre_id: number;

  @OneToMany(() => BorrowRecord, borrowRecord => borrowRecord.book)
  borrowRecords: BorrowRecord[];
} 