import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColegiosModule } from './colegios/colegios.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MateriasModule } from './materias/materias.module';
import { MateriaEstdiantesModule } from './materia-estdiantes/materia-estdiantes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
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
      synchronize: true
    }),

    ColegiosModule,

    EstudiantesModule,

    MateriasModule,

    MateriaEstdiantesModule,

    UsersModule,

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
