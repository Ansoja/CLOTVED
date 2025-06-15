/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { ConfigModule } from '@nestjs/config';

// Importa tus entidades:
import { Persona } from './entities/persona.entity';
import { Rol } from './entities/rol.entity';
import { Registro } from './entities/registro.entity';
import { UsuarioEspecial } from './entities/usuarioEspecial.entity';
import { UsuarioMiembro } from './entities/usuarioMiembro.entity';
import { Publicaciones } from './entities/publicaciones.entity';
import { Categorias } from './entities/categorias.entity';
import { Secciones } from './entities/seccionPagina.entity';
import { Header } from './entities/header.entity';
import { Footer } from './entities/footer.entity';
import { Imagenes } from './entities/imagenes.entity';
import { RedSocial } from './entities/redSocial.entity';

@Module({
  imports: [ConfigModule,
    TypeOrmModule.forFeature([
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
    ]),
    ],
  controllers: [CmsController],
  providers: [CmsService],
})
export class CmsModule {}
