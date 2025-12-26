import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Episodio } from '../../episodios/entities/episodio.entity';

@Entity()
export class Serie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    genero: string;

    @Column('text')
    sinopsis: string;

    @Column()
    urlPortada: string;

    @OneToMany(() => Episodio, episodio => episodio.serie)
    episodios: Episodio[];
}
