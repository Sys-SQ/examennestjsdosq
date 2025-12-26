import { PartialType } from '@nestjs/mapped-types';
import { CreateSerieDto } from './create-series.dto';

export class UpdateSeriesDto extends PartialType(CreateSerieDto) { }