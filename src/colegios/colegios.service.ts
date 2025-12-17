import { Injectable } from '@nestjs/common';
import { CreateColegioDto } from './dto/create-colegio.dto';
import { UpdateColegioDto } from './dto/update-colegio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Colegio } from './entities/colegio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColegiosService {

  constructor(
    @InjectRepository(Colegio) private readonly colegioRepository: Repository<Colegio>
  ) { }



  async create(createColegioDto: CreateColegioDto) {
    const colegio = this.colegioRepository.create(createColegioDto);
    return await this.colegioRepository.save(colegio);
  }

  async findAll() {
    return await this.colegioRepository.find();
  }

  async findOne(id: string) {
    return await this.colegioRepository.findOne({
      where: { id },
      relations: ["estudiantes"]
    });
  }

  async update(id: number, updateColegioDto: UpdateColegioDto) {
    return await this.colegioRepository.update(id, updateColegioDto);
  }

  async remove(id: number) {
    return await this.colegioRepository.softDelete(id)
  }
}
