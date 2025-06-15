/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Header } from './header.entity';
import { Footer } from './footer.entity';

@Entity('secciones')
export class Secciones {
  @PrimaryGeneratedColumn()
  id_seccion_pagina: number;

  @Column()
  seccion_pagina: string;

  // Relaciones 
  @OneToMany(() => Header, header => header.secciones)
    headers: Header[];
    
  @OneToMany(() => Footer, footer => footer.secciones)
    footer: Footer[];
}