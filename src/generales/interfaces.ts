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
    fechaActual: Moment;
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

