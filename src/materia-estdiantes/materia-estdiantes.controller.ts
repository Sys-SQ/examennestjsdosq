import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaEstdiantesService } from './materia-estdiantes.service';
import { CreateMateriaEstdianteDto } from './dto/create-materia-estdiante.dto';
import { UpdateMateriaEstdianteDto } from './dto/update-materia-estdiante.dto';

@Controller('materia-estdiantes')
export class MateriaEstdiantesController {
  constructor(private readonly materiaEstdiantesService: MateriaEstdiantesService) {}

  @Post()
  create(@Body() createMateriaEstdianteDto: CreateMateriaEstdianteDto) {
    return this.materiaEstdiantesService.create(createMateriaEstdianteDto);
  }

  @Get()
  findAll() {
    return this.materiaEstdiantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaEstdiantesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaEstdianteDto: UpdateMateriaEstdianteDto) {
    return this.materiaEstdiantesService.update(+id, updateMateriaEstdianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaEstdiantesService.remove(+id);
  }
}
