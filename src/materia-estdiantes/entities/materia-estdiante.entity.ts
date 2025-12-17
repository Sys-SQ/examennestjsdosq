import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../../estudiantes/entities/estudiante.entity";
import { Colegio } from "../../colegios/entities/colegio.entity";

@Entity()
export class MateriaEstdiante {

    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(() => Estudiante, estudiante => estudiante.materiaEstudiantes)
    estudiante: Estudiante

    @ManyToOne(()=> Colegio, colegio => colegio.materiaEstudiantes)
    colegio: Colegio

    

}
