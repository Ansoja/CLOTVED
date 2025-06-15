/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { UsuarioEspecial } from './usuarioEspecial.entity';
import { Publicaciones } from './publicaciones.entity';


@Entity('categorias')
export class Categorias {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nombre_categoria: string;

  @Column()
  fecha_creacion: Date;

  @Column()
  fecha_modificacion: Date;


  // Relaciones 
  //Usuario Especial
    @ManyToOne(() => UsuarioEspecial)
    @JoinColumn({ name: 'id_creado_por' }) // Este será el campo en la tabla
    creado_por: UsuarioEspecial;
  // Usuario Especial también
    @ManyToOne(() => UsuarioEspecial)
    @JoinColumn({ name: 'id_modificado_por' }) // Otro campo diferente
    modificado_por: UsuarioEspecial;
  //Publicaciones
    @ManyToMany(() => Publicaciones, publicaciones => publicaciones.categorias)
publicaciones: Publicaciones[];
}