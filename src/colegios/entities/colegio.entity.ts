import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../../estudiantes/entities/estudiante.entity";
import { MateriaEstdiante } from "../../materia-estdiantes/entities/materia-estdiante.entity";

@Entity()
export class Colegio {

    @PrimaryGeneratedColumn()
    id:string;

    @Column({unique: true})
    nombre:string

    @Column()
    direccion:string

    @Column()
    capacidad:number


    @OneToMany(()=> Estudiante, estudiante => estudiante.colegio)
    estudiantes:Estudiante[]

    @OneToMany(() => MateriaEstdiante, materiaEstdiante => materiaEstdiante.colegio)
    materiaEstudiantes: MateriaEstdiante[]

}
