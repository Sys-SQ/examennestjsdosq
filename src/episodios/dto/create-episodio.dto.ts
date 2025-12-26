import { IsString, IsNumber } from 'class-validator';

export class CreateEpisodioDto {
    @IsString()
    titulo: string;

    @IsNumber()
    duracion: number;

    @IsNumber()
    numeroCapitulo: number;

    @IsNumber()
    serieId: number;
}
