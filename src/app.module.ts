import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColegiosModule } from './colegios/colegios.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MateriasModule } from './materias/materias.module';
import { MateriaEstdiantesModule } from './materia-estdiantes/materia-estdiantes.module';
@Module({
  imports: [



    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: false
    }),

    ColegiosModule,

    EstudiantesModule,

    MateriasModule,

    MateriaEstdiantesModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
