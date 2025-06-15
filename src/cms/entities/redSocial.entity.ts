/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Footer } from './footer.entity';

@Entity('redSocial')
export class RedSocial {
  @PrimaryGeneratedColumn()
  id_red_social: number;

  @Column()
    nombre_red_social: string;
    
    @Column()
    url_red_social: string;

  // Relaciones 
  @OneToMany(() => Footer, footer => footer.redSocial)
  footers: Footer[];
}