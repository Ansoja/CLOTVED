/* eslint-disable prettier/prettier */
// src/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // o tu host de RDS si ya usas AWS
  port: 5432,
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base',
  autoLoadEntities: true,
  synchronize: true, // ⚠️ Solo en desarrollo
};
