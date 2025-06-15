/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsuarioEspecial } from './usuarioEspecial.entity';
import { UsuarioMiembro } from './usuarioMiembro.entity';

@Entity('registro')
export class Registro {
    @PrimaryGeneratedColumn()
    id_registro: number;

    @Column()
    fecha_registro: Date;

    //RELACIONES
    @OneToMany(() => UsuarioEspecial, usuarioEspecial => usuarioEspecial.registro)
    usuariosEspeciales: UsuarioEspecial[];

    @OneToMany(() => UsuarioMiembro, usuarioMiembro => usuarioMiembro.registro)
    usuarioMiembros: UsuarioMiembro[];
}