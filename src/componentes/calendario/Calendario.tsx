import 'moment/min/moment-with-locales';
import React, { useCallback, useState } from 'react';
import { Box, Button, Typography, Menu, MenuItem, Stack } from "@mui/material";
import { KeyboardArrowDownOutlined, FilterList} from '@mui/icons-material';
import { AgregarEvento, CalendarioProps,  ContenedorDias,  ControlFecha, Evento } from '..';
import CalendarICon from '../../assets/icons/svgs/Calendario.svg';
import moment, { Moment } from 'moment/';
moment().locale('es');


export const Calendario = ({ eventos }: CalendarioProps) => {

    const [eventosActuales, setEventosActuales ] = useState<Evento[]>(eventos);
    const [open, setOpen] = useState(false);
    const [anchorEl, cambiarAnchor] = useState<null | HTMLElement>(null);
    const [anchorMesEl, cambiarAnchorMes] = useState<null | HTMLElement>(null);
    const [fechaActual, cambiarFechaActual] = useState<Moment>(moment());
    const [mesSeleccionado, cambiarMesSeleccionado] = useState<number>(moment().month());

    const abrirCerrarDrawer = useCallback(() => {
        setOpen(prevOpen => !prevOpen);
    }, []);

    const obtenerAñoAMostrar = useCallback((evento: React.MouseEvent<HTMLButtonElement>) => {
        cambiarAnchor(evento.currentTarget);
    }, []);

    const obtenerMesAMostrar = useCallback((evento: React.MouseEvent<HTMLButtonElement>) => {
        cambiarAnchorMes(evento.currentTarget);
    }, []);

    const cerrarMenu = useCallback(() => {
        cambiarAnchor(null);
        cambiarAnchorMes(null);
    }, []);

    const obtenerAñoSeleccionado = useCallback((año: number) => {
        cambiarFechaActual(moment(fechaActual).year(año));
        cerrarMenu();
    }, [fechaActual, cambiarFechaActual, cerrarMenu]);

    const obtenerMesSeleccionado = useCallback((mes: number) => {
        cambiarFechaActual(moment(fechaActual).month(mes));
        cambiarMesSeleccionado(mes);
        cerrarMenu();
    }, [fechaActual, cambiarFechaActual, cerrarMenu]);

    const años = Array.from(new Array(15), (_valor, index) => moment().year() - index);
    const meses = moment.months();

    return (
        <Box
            flex={1}
            gap={1}
            height={'100vh'}
            width='100%'
            sx={{
                backgroundColor: "background.default"
            }}
        >
            <Box display='flex' alignItems='center' justifyContent='space-between' p={1} gap={1}>
                <Box display='flex' alignItems='center' justifyContent='center' gap={1}>
                    <img src={CalendarICon} alt='icono_calendario.svg' style={{ width: '2.75rem', height: '2.75rem' }} />
                    <Typography variant='h6'>
                        Calendario de eventos
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent="center" gap={1}>
                    <Button startIcon={<FilterList fontSize='small' />} size="small" color="primary" variant='text' > Filtrar </Button>
                    <Button onClick={obtenerAñoAMostrar} endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Año</Button>
                    <Menu
                        sx={{
                            height: "21.875rem",
                            overflow: "auto",
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={cerrarMenu} >
                        {años.map((año) => (
                            <MenuItem sx={{ width: "100%" }} key={año} onClick={() => obtenerAñoSeleccionado(año)}>
                                {año}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button onClick={obtenerMesAMostrar} endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Mes</Button>
                    <Menu
                        anchorEl={anchorMesEl}
                        open={Boolean(anchorMesEl)}
                        onClose={cerrarMenu} >
                        {meses.map((mes, index) => (
                            <MenuItem key={mes} onClick={() => obtenerMesSeleccionado(index)} selected={index === mesSeleccionado}>
                                {mes}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button size="small" color="primary" variant='contained' onClick={abrirCerrarDrawer}>Nuevo evento</Button>
                </Box>
            </Box>

            <ControlFecha fechaActual={fechaActual} cambiarFechaActual={cambiarFechaActual} />
            <ContenedorDias eventos={eventosActuales} fechaActual={fechaActual}  />
            <AgregarEvento open={open} onClose={abrirCerrarDrawer} />
        </Box>
    );
};
