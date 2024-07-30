import { PaletteColor } from '@mui/material';
import { Moment } from 'moment';

export interface CambioFechaProps {
    open?: boolean;
    fechaActual: Moment;
    cambiarFechaActual?: (nuevaFecha: Moment) => void;
}

export interface controlAbrirCerrar {
    open: boolean;
    onClose: () => void;
}

export interface UsuarioProps {
    id: number;
    name: string;
    cargo: string;
    avatar: string;
}

export interface listaEventoProps {
    titulo: string;
    descripcion: string;
    fecha: string;
    horaInicio: string;
    horaFin: string;
    asistentes: string[];
    organizador: string;
    open?: boolean;
    onClose?: () => void;
}


export interface PopoverEventoProps {
    descripcion: string;
    horaInicio: string;
    horaFin: string;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}


export interface EventoProps {
    horaInicio: string;
    horaFin: string;
    descripcion: string;
    tipoEvento?: PaletteColor;
    onClose: () => void;
}

export const Usuarios: UsuarioProps[] = [
    { id: 1, name: 'María Paula García Romero', cargo: 'Contador publico', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Diana Álvarez Cárdenas', cargo: 'Scrum master', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Camila María Torres Alvarado', cargo: 'Auxiliar administrativo', avatar: 'https://via.placeholder.com/40' },
];

export const Eventos: listaEventoProps[] = [
    {
        titulo: "Pago de Nómina - SINCO Evento de Pago nómina ",
        descripcion: "Se determinan requerimiento para evento de Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm",
        asistentes: ["María Paula García Romero", "Diana Álvarez Cárdenas", "Camila María Torres Alvarado"],
        organizador: "María Paula García Romero "
    },
    {
        titulo: "Capacitacion obligatoria",
        descripcion: "Capacitacion de empleados para un uso correcto del Desing system ",
        fecha: "22/09/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm",
        asistentes: [],
        organizador: "Diana Álvarez Cárdenas"
    },
    {
        titulo: "Pago de Nómina - SINCO Evento de Pago nómina ",
        descripcion: "Se determinan requerimiento para evento de Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm",
        asistentes: ["María Paula García Romero", "Diana Álvarez Cárdenas", "Camila María Torres Alvarado"],
        organizador: "María Paula García Romero "
    },
    {
        titulo: "Capacitacion obligatoria",
        descripcion: "Capacitacion de empleados para un uso correcto del Desing system ",
        fecha: "22/09/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm",
        asistentes: [],
        organizador: "Diana Álvarez Cárdenas"
    },
];