import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Serie } from '../../series/entities/series.entity';


@Entity()
export class Episodio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    duracion: number;

    @Column()
    numeroCapitulo: number;

    @ManyToOne(() => Serie, serie => serie.episodios, {
        onDelete: 'CASCADE',
    })
    serie: Serie;
}
