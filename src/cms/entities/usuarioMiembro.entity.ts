/* eslint-disable prettier/prettier */
import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
    import { Persona } from './persona.entity';
    import { Rol } from './rol.entity';
    import { Registro } from './registro.entity';
  
  @Entity('usuarios_miembro')
  export class UsuarioMiembro {
    @PrimaryGeneratedColumn()
    id_usuario_miembro: number;
  
      // Relaciones
      //FALTABA EL id_persona COMO FK DE PERSONA EN EL DIAGRAMA
    @ManyToOne(() => Persona, persona => persona.usuarioMiembros)
    @JoinColumn({ name: 'id_persona' })
    persona: Persona;
  
    @ManyToOne(() => Rol, rol => rol.usuariosMiembro)
    @JoinColumn({ name: 'id_rol' })
      rol: Rol;
      
    @ManyToOne(() => Registro, registro => registro.usuarioMiembros)
    @JoinColumn({ name: 'id_registro' })
    registro: Registro;
  
  }