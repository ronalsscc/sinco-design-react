import moment, { Moment } from 'moment';

export interface CambioFechaProps {
    fechaActual: Moment;
    cambiarFechaActual?: (nuevaFecha: Moment) => void;
}

export interface NuevoEventoProps {
    open: boolean;
    toggleDialog: () => void;
}

export interface UsuarioProps {
    id: number;
    name: string;
    cargo: string;
    avatar: string;
}
