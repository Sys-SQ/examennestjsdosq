import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { ColegiosModule } from '../colegios/colegios.module';
import { MateriasModule } from '../materias/materias.module';

@Module({
  imports:[TypeOrmModule.forFeature([Estudiante]), ColegiosModule , MateriasModule],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}
