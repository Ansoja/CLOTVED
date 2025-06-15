/* eslint-disable prettier/prettier */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
  } from 'typeorm';
  import { Persona } from './persona.entity';
  import { Rol } from './rol.entity';
import { Registro } from './registro.entity';
import { Publicaciones } from './publicaciones.entity';
  
  @Entity('usuarios_especiales')
  export class UsuarioEspecial {
    @PrimaryGeneratedColumn()
    id_usuario_especial: number;
  
    @Column()
        hash_password: string;

    @Column({ type: 'date' })
        ultimo_login: Date;

  
    // Relaciones
    //Persona
    @ManyToOne(() => Persona, persona => persona.usuarioEspeciales)
    @JoinColumn({ name: 'id_persona' })
    persona: Persona;
    //Roles
    @ManyToOne(() => Rol, rol => rol.usuariosEspeciales)
    @JoinColumn({ name: 'id_rol' })
      rol: Rol;
    //Registro
    @ManyToOne(() => Registro, registro => registro.usuariosEspeciales)
    @JoinColumn({ name: 'id_registro' })
      registro: Registro;
    //Publicaciones
    @OneToMany(() => Publicaciones, publicaciones => publicaciones.usuariosEspeciales)
    publicaciones: Publicaciones;

  }