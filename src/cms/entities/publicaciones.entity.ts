/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Header } from './header.entity';
import { UsuarioEspecial } from './usuarioEspecial.entity';
import { Imagenes } from './imagenes.entity';
import { Categorias } from './categorias.entity';

@Entity('publicaciones')
export class Publicaciones {
  @PrimaryGeneratedColumn()
  id_publicacion: number;

  @Column()
  titulo_publicacion: string;

  @Column()
  info_publicacion: string;

  @Column()
  fecha_publicacion: Date;

    
    // Relaciones 
    //Header
  @OneToMany(() => Header, header => header.publicaciones)
    headers: Header[];
    
    //Categoria
    @ManyToMany(() => Categorias, categorias => categorias.publicaciones)
    @JoinTable({
    name: 'publicacion_categoria', // nombre de la tabla intermedia
    joinColumn: { name: 'id_publicacion', referencedColumnName: 'id_publicacion' },
    inverseJoinColumn: { name: 'id_categoria', referencedColumnName: 'id_categoria' },
})
categorias: Categorias[];

    //Usuarios Especiales
    @ManyToOne(() => UsuarioEspecial, usuarioEspecial => usuarioEspecial.publicaciones)
    @JoinColumn({ name: 'id_usuario_especial' })
    usuariosEspeciales: UsuarioEspecial;
  
    //Imagenes 
    @ManyToOne(() => Imagenes, imagenes => imagenes.publicaciones)
    @JoinColumn({ name: 'id_imagen' })
    imagenes: Imagenes;
}