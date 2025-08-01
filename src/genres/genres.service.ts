import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from '../entities/genre.entity';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private genresRepository: Repository<Genre>,
  ) {}

  async create(name: string): Promise<Genre> {
    const genre = this.genresRepository.create({ name });
    return await this.genresRepository.save(genre);
  }

  async findAll(): Promise<Genre[]> {
    return await this.genresRepository.find();
  }

  async findOne(id: number): Promise<Genre> {
    const genre = await this.genresRepository.findOne({
      where: { id },
    });

    if (!genre) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }

    return genre;
  }

  async update(id: number, name: string): Promise<Genre> {
    const genre = await this.findOne(id);
    genre.name = name;
    return await this.genresRepository.save(genre);
  }

  async remove(id: number): Promise<void> {
    const genre = await this.findOne(id);
    await this.genresRepository.remove(genre);
  }
} 