/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsuarioEspecial } from './usuarioEspecial.entity';
import { UsuarioMiembro } from './usuarioMiembro.entity';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column()
  nombre_rol: string;

    
    //RELACIONES
  @OneToMany(() => UsuarioEspecial, usuarioEspecial => usuarioEspecial.rol)
    usuariosEspeciales: UsuarioEspecial[];
    
  @OneToMany(() => UsuarioMiembro, UsuarioMiembro => UsuarioMiembro.rol)
      usuariosMiembro: UsuarioMiembro[];

}