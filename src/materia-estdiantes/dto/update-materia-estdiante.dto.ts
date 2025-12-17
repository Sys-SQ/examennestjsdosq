import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaEstdianteDto } from './create-materia-estdiante.dto';

export class UpdateMateriaEstdianteDto extends PartialType(CreateMateriaEstdianteDto) {}
