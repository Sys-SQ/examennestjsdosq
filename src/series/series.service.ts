import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Serie } from "./entities/series.entity";
import { CreateSerieDto } from "./dto/create-series.dto";
import { UpdateSeriesDto } from "./dto/update-series.dto";

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private repo: Repository<Serie>,
  ) { }

  create(dto: CreateSerieDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ relations: ['episodios'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['episodios'],
    });
  }

  update(id: number, dto: UpdateSeriesDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
