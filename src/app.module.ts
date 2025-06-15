/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CmsModule } from './cms/cms.module';

import { Persona } from './cms/entities/persona.entity';
import { Rol } from './cms/entities/rol.entity';
import { Registro } from './cms/entities/registro.entity';
import { UsuarioEspecial } from './cms/entities/usuarioEspecial.entity';
import { UsuarioMiembro } from './cms/entities/usuarioMiembro.entity';
import { Publicaciones } from './cms/entities/publicaciones.entity';
import { Categorias } from './cms/entities/categorias.entity';
import { Secciones } from './cms/entities/seccionPagina.entity';
import { Header } from './cms/entities/header.entity';
import { Footer } from './cms/entities/footer.entity';
import { Imagenes } from './cms/entities/imagenes.entity';
import { RedSocial } from './cms/entities/redSocial.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST') ?? 'localhost',
        port: parseInt(configService.get<string>('DB_PORT') ?? '5432', 10),
        username: configService.get<string>('DB_USERNAME') ?? 'diego',
        password: configService.get<string>('DB_PASSWORD') ?? 'hola123',
        database: configService.get<string>('DB_NAME') ?? 'colegio_optometrista',

        entities: [
          Persona,
          Rol,
          Registro,
          UsuarioEspecial,
          UsuarioMiembro,
          Publicaciones,
          Categorias,
          Secciones,
          Header,
          Footer,
          Imagenes,
          RedSocial,
        ],
        synchronize: true, // ❗ Solo para desarrollo. Desactívalo en producción.
        autoLoadEntities: true,
      }),
    }),
    CmsModule,
  ],
})
export class AppModule {}
