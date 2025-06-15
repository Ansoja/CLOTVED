/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Header } from './header.entity';
import { Footer } from './footer.entity';
import { Publicaciones } from './publicaciones.entity';

@Entity('imagenes')
export class Imagenes {
  @PrimaryGeneratedColumn()
  id_imagen: number;

  @Column()
  nombre_img: string;

  @Column()
  url_img: string;

    // Relaciones 
    //Header
  @OneToMany(() => Header, header => header.imagenes)
    headers: Header[];
    //Footer
    @OneToMany(() => Footer, footer => footer.imagenes)
    footer: Footer[];
    //Publicaciones
    @OneToMany(() => Publicaciones, publicaciones => publicaciones.imagenes)
    publicaciones: Publicaciones[];
}