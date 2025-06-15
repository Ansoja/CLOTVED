/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Secciones } from './seccionPagina.entity';
import { Publicaciones } from './publicaciones.entity';
import { Imagenes } from './imagenes.entity';

@Entity('header')
export class Header {
  @PrimaryGeneratedColumn()
  id_header: number;

  // Relaciones
    //Seccion Pagina
    @ManyToOne(() => Secciones, secciones => secciones.headers)
    @JoinColumn({ name: 'id_seccion_pagina' })
    secciones: Secciones;

    //Publicaciones
    @ManyToOne(() => Publicaciones, publicaciones => publicaciones.headers)
    @JoinColumn({ name: 'id_publicacion' })
    publicaciones: Publicaciones;

    //Imagenes
    @ManyToOne(() => Imagenes, imagenes => imagenes.headers)
    @JoinColumn({ name: 'id_imagen' })
    imagenes: Imagenes;
}