import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Episodio } from "./entities/episodio.entity";
import { Serie } from "../series/entities/series.entity";
import { CreateEpisodioDto } from "./dto/create-episodio.dto";
import { UpdateEpisodioDto } from "./dto/update-episodio.dto";

@Injectable()
export class EpisodiosService {
  constructor(
    @InjectRepository(Episodio)
    private episodioRepo: Repository<Episodio>,

    @InjectRepository(Serie)
    private serieRepo: Repository<Serie>,
  ) { }

  async create(dto: CreateEpisodioDto) {
    const serie = await this.serieRepo.findOne({
      where: { id: dto.serieId },
    });

    if (!serie) {
      throw new NotFoundException('La serie no existe');
    }

    const episodio = this.episodioRepo.create({
      titulo: dto.titulo,
      duracion: dto.duracion,
      numeroCapitulo: dto.numeroCapitulo,
      serie: serie, // 💥 ahora TypeScript está feliz
    });

    return this.episodioRepo.save(episodio);
  }

  findAll() {
    return this.episodioRepo.find({ relations: ['serie'] });
  }

  async findOne(id: number) {
    const episodio = await this.episodioRepo.findOne({
      where: { id },
      relations: ['serie'],
    });

    if (!episodio) {
      throw new NotFoundException('Episodio no encontrado');
    }

    return episodio;
  }

  async update(id: number, dto: UpdateEpisodioDto) {
    await this.findOne(id);
    await this.episodioRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.episodioRepo.delete(id);
  }
}
