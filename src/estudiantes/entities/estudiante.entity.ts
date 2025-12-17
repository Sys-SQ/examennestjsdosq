import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Colegio } from "../../colegios/entities/colegio.entity"
import { Materia } from "../../materias/entities/materia.entity"
import { MateriaEstdiante } from "../../materia-estdiantes/entities/materia-estdiante.entity"


@Entity('estudiantes_echa')
export class Estudiante {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    fechaNacimiento: Date

    @ManyToOne(() => Colegio, colegio => colegio.estudiantes)
    colegio: Colegio

    @ManyToMany(() => Materia, materia => materia.estudiantes,
        { cascade: true }
    )
    @JoinTable()
    materias: Materia[]


    @OneToMany(() => MateriaEstdiante, materiaEstdiante => materiaEstdiante.estudiante)
    materiaEstudiantes: MateriaEstdiante[]
}
