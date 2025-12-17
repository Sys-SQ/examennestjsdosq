import { Module } from '@nestjs/common';
import { MateriaEstdiantesService } from './materia-estdiantes.service';
import { MateriaEstdiantesController } from './materia-estdiantes.controller';
import { TypeORMError } from 'typeorm/browser';
import { MateriaEstdiante } from './entities/materia-estdiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([MateriaEstdiante])],
  controllers: [MateriaEstdiantesController],
  providers: [MateriaEstdiantesService],
})
export class MateriaEstdiantesModule {}
