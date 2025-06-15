/* eslint-disable prettier/prettier */
 
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsuarioEspecial } from './usuarioEspecial.entity';
import { UsuarioMiembro } from './usuarioMiembro.entity';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  telefono: string;

  @Column({ type: 'date' })
  fecha_nac: Date;

  // Relaciones
  @OneToMany(() => UsuarioEspecial, usuarioEspecial => usuarioEspecial.persona)
  usuarioEspeciales: UsuarioEspecial[];

  @OneToMany(() => UsuarioMiembro, usuarioMiembro => usuarioMiembro.persona)
  usuarioMiembros: UsuarioMiembro[];
}