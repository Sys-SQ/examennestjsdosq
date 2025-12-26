import { IsNotEmpty, IsString } from "class-validator";

export class CreateSerieDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    genero: string;

    @IsString()
    sinopsis: string;

    @IsString()
    urlPortada: string;
}
