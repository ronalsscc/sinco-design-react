import { Moment } from 'moment';

export interface Evento {
    nombreEvento: string;
    descripcion?: string;
    fecha: Date;
    horaInicio: string;
    horaFin: string;
    asistentes?: string[];
    organizador: string;
}

export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
}

export interface TipoEvento {
    tipo: string;
    descripcion: string;
    color: string;
}

export interface CambioFechaProps {
    open?: boolean;
    fechaActual: Moment;
    cambiarFechaActual?: (nuevaFecha: Moment) => void;
}

export interface CalendarioProps {
    eventos: Evento[];
}

export interface ContenedorDiasProps extends CambioFechaProps {
    eventos: Evento[];
}

export interface controlAbrirCerrar {
    open: boolean;
    onClose: () => void;
}

export  interface EventoProps {
    horaInicio: string;
    horaFin: string;
    nombreEvento: string;
}

export interface UsuarioProps {
    id: number;
    name: string;
    cargo: string;
    avatar: string;
}

export const Usuarios: UsuarioProps[] = [
    { id: 1, name: 'María Paula García Romero', cargo: 'Contador publico', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Diana Álvarez Cárdenas', cargo: 'Scrum master', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Camila María Torres Alvarado', cargo: 'Auxiliar administrativo', avatar: 'https://via.placeholder.com/40' },
];
