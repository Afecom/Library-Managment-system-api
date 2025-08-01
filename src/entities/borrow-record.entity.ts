import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from './book.entity';
import { Member } from './member.entity';

@Entity()
export class BorrowRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, book => book.borrowRecords)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @Column()
  book_id: number;

  @ManyToOne(() => Member, member => member.borrowRecords)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @Column()
  member_id: number;

  @Column({ type: 'date' })
  borrow_date: Date;

  @Column({ type: 'date' })
  due_date: Date;

  @Column({ type: 'date', nullable: true })
  return_date: Date;
} 