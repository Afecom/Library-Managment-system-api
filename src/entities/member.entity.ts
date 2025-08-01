import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BorrowRecord } from './borrow-record.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'date' })
  join_date: Date;

  @OneToMany(() => BorrowRecord, borrowRecord => borrowRecord.member)
  borrowRecords: BorrowRecord[];
} 