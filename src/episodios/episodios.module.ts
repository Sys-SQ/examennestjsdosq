import { Module } from '@nestjs/common';
import { EpisodiosService } from './episodios.service';
import { EpisodiosController } from './episodios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episodio } from './entities/episodio.entity';
import { Serie } from '../series/entities/series.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Episodio, Serie]),
  ],
  controllers: [EpisodiosController],
  providers: [EpisodiosService],
})
export class EpisodiosModule { }
