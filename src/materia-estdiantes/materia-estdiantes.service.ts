import { Injectable } from '@nestjs/common';
import { CreateMateriaEstdianteDto } from './dto/create-materia-estdiante.dto';
import { UpdateMateriaEstdianteDto } from './dto/update-materia-estdiante.dto';

@Injectable()
export class MateriaEstdiantesService {
  create(createMateriaEstdianteDto: CreateMateriaEstdianteDto) {
    return 'This action adds a new materiaEstdiante';
  }

  findAll() {
    return `This action returns all materiaEstdiantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiaEstdiante`;
  }

  update(id: number, updateMateriaEstdianteDto: UpdateMateriaEstdianteDto) {
    return `This action updates a #${id} materiaEstdiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiaEstdiante`;
  }
}
