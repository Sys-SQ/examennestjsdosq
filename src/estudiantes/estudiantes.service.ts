import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Colegio } from '../colegios/entities/colegio.entity';
import { Materia } from '../materias/entities/materia.entity';

@Injectable()
export class EstudiantesService {


  constructor(

    @InjectRepository(Estudiante) private estudianteRepository: Repository<Estudiante>,
    @InjectRepository(Colegio) private colegioRepository: Repository<Colegio>,
    @InjectRepository(Materia) private materiRepository: Repository<Materia>

  ) { }

  async create(createEstudianteDto: CreateEstudianteDto) {

    const colegio = await this.colegioRepository.findOneBy({ nombre: createEstudianteDto.nombreColegio })

    if (!colegio) {
      throw new BadRequestException('El colegio no existe')
    }

    let listaMaterias: Materia[] = []

    if (createEstudianteDto.materiasIds && createEstudianteDto.materiasIds.length > 0) {
      listaMaterias = await this.materiRepository.findBy({
        id: In(createEstudianteDto.materiasIds)
      })
    }

    const estudiante = this.estudianteRepository.create({
      ...createEstudianteDto,
      colegio,
      materias: listaMaterias
    })

    return await this.estudianteRepository.save(estudiante)

  }

  async findAll() {
    // return this.colegioRepository.find()

    return await this.estudianteRepository
      .createQueryBuilder("estudiante")
      .leftJoinAndSelect("estudiante.colegio", "colegio")
      .leftJoinAndSelect("estudiante.materias", "materias")
      .select([
        'estudiante.id',
        'estudiante.nombre',
        'estudiante.apellido',
        'colegio.nombre',
        'colegio.direccion',
        'materias.nombre'
      ])
      .getMany()
  }

  async findOne(id: number) {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id },
      relations: ['colegio', 'materias']
    })

    return estudiante
    
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    const estudiante = await this.estudianteRepository.findOneBy({ id })

    if (!estudiante) {
      throw new BadRequestException('El estudiante no existe')
    }

    // Colegio: mantener el actual si no se envía, actualizar si viene nombreColegio
    let colegioAsignar = estudiante.colegio
    if (updateEstudianteDto.nombreColegio !== undefined) {
      const colegio = await this.colegioRepository.findOneBy({
        nombre: updateEstudianteDto.nombreColegio
      })

      if (!colegio) {
        throw new BadRequestException('El colegio no existe')
      }
      colegioAsignar = colegio
    }

    // Materias: si se envía materiasIds, incluso vacío, actualizar en consecuencia; si no, no tocar
    let materiasAsignar: Materia[] | undefined
    if (updateEstudianteDto.materiasIds !== undefined) {
      if (updateEstudianteDto.materiasIds.length > 0) {
        const listaMaterias = await this.materiRepository.findBy({
          id: In(updateEstudianteDto.materiasIds)
        })

        if (listaMaterias.length !== updateEstudianteDto.materiasIds.length) {
          throw new BadRequestException('Una o más materias no existen')
        }

        materiasAsignar = listaMaterias
      } else {
        // Se solicitó vaciar las materias
        materiasAsignar = []
      }
    }

    // Guardar con mezcla de campos: actualizar solo lo enviado
    return await this.estudianteRepository.save({
      ...estudiante,
      ...updateEstudianteDto,
      colegio: colegioAsignar,
      ...(materiasAsignar !== undefined ? { materias: materiasAsignar } : {})
    })
  }

  async remove(id: number) {
    const estudiante = await this.estudianteRepository.findOneBy({ id });

    if (!estudiante) {
      throw new BadRequestException('El estudiante no existe');
    }

    return await this.estudianteRepository.delete(id)

  }
}
