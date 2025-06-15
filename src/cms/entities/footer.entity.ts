/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from 'typeorm';
import { Secciones } from './seccionPagina.entity';
import { Imagenes } from './imagenes.entity';
import { RedSocial } from './redSocial.entity';

@Entity('footer')
export class Footer {
  @PrimaryGeneratedColumn()
  id_footer: number;

   @Column()
    info_footer: string;

  // Relaciones 
    //Seccion pagina
    @ManyToOne(() => Secciones, secciones => secciones.footer)
    @JoinColumn({ name: 'id_seccion_pagina' })
    secciones: Secciones;
    
    //Redes sociales
    @ManyToOne(() => RedSocial, redSocial => redSocial.footers)
    @JoinColumn({ name: 'id_red_social' })
    redSocial: RedSocial;
  
    //imagenes
    @ManyToOne(() => Imagenes, imagenes => imagenes.footer)
    @JoinColumn({ name: 'id_imagen' })
    imagenes: Imagenes;
}