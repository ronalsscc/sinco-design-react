import 'moment/min/moment-with-locales';
import React, { useCallback, useState } from 'react';
import { AgregarEvento } from './eventos/AgregarEvento';
import CalendarICon from '../../assets/icons/svgs/Calendario.svg';
import { CambioFechaProps, Evento, ListaEventos } from '..';
import { Box, Button, Chip, Stack, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import { LightModeOutlined, NavigateNext, KeyboardArrowDownOutlined, FilterList, NavigateBefore, CalendarToday } from '@mui/icons-material';
import moment, { Moment } from 'moment/';
import { Link } from 'react-router-dom';
moment.locale('es');

export const ControlFecha: React.FC<CambioFechaProps> = ({ fechaActual, cambiarFechaActual }) => {

    const mesAnterior = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment(fechaActual).subtract(1, 'months'));
    }, [fechaActual, cambiarFechaActual]);

    const mesSiguiente = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment(fechaActual).add(1, 'months'));
    }, [fechaActual, cambiarFechaActual]);

    const resetToToday = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment());
    }, [cambiarFechaActual]);



    return (
        <Stack flexDirection='row' py={.5} px={1} alignItems='center' justifyContent='space-around' bgcolor="background.paper">
            <Chip
                sx={{
                    backgroundColor: "primary.50"
                }}
                icon={<LightModeOutlined color='primary' fontSize='small' />}
                label="Hoy"
                onClick={resetToToday}
            />

            <Stack flexDirection='row' flex={1} gap={1} justifyContent='center' alignItems='center'>
                <IconButton aria-label="anterior" onClick={mesAnterior} >
                    <NavigateBefore fontSize='small' color='primary' />
                </IconButton>
                <Typography color="primary" variant="h6"> {fechaActual.format('MMMM, YYYY')} </Typography>
                <IconButton aria-label="anterior" onClick={mesSiguiente} >
                    <NavigateNext fontSize='small' color="primary" />
                </IconButton>
            </Stack>
            <Stack flexDirection="row" gap={1}>

                <Button startIcon={<CalendarToday fontSize='small' />} size="small" color="primary" variant='outlined' component={Link} to="/vistaDia"> Día </Button>
            </Stack>
        </Stack>
    );
};

const ContenedorDias: React.FC<CambioFechaProps> = ({ fechaActual }) => {

    const [abrirDrawer, cerrarDrawer] = useState(false);

    const controlDiaEvento = useCallback(() => {
        cerrarDrawer(prevOpen => !prevOpen);
    }, []);

    const obtenerDiasAMostrar = useCallback(() => {
        let diasIteracion = [];
        const primerDiaDelMes = moment(fechaActual).startOf("month");
        const ultimoDiaMes = moment(fechaActual).endOf("month");

        for (let day = moment(primerDiaDelMes); day.isSameOrBefore(ultimoDiaMes); day.add(1, "day")) {
            diasIteracion.push(moment(day));
        }

        const primerDiaDelSiguienteMes = moment(fechaActual).add(1, "month").startOf("month");
        const longitudDeDias = diasIteracion.length;

        if ((longitudDeDias / 7) % 1 !== 0) {
            for (let day = moment(primerDiaDelSiguienteMes); day.day() <= (31 - longitudDeDias); day.add(1, "day")) {
                diasIteracion.push(moment(day));
            }
        }
        return diasIteracion;
    }, [fechaActual]);

    const diasDeLaSemana = moment.weekdays();

    return (
        <Box width='100%' height={"100%"} maxHeight={"32rem"}
            boxSizing='border-box' justifyContent="center" gap={0.5} flexWrap='wrap' sx={{ backgroundColor: 'transparent' }}>
            <Stack display='grid' height={"5%"} gridTemplateColumns="repeat(7, 1fr)" py={1}>
                {diasDeLaSemana.map((dia, index) => (
                    <Stack
                        key={`weekday-${index}`}
                        flexDirection="row"
                        alignItems='center'
                        justifyContent='center'
                        boxSizing='border-box'
                        borderRadius={1}
                    >
                        <Typography variant='caption' color="text.secondary">
                            {dia}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Stack display='grid' height="95%" width="100%" overflow="auto" gridTemplateColumns="repeat(7, 1fr)" gap={.5} >
                {obtenerDiasAMostrar().map((dia, index) => (
                    <Box key={index} sx={{
                        backgroundColor: "background.paper",
                        ":hover, :focus, :active": {
                            backgroundColor: (theme) => theme.palette.primary[50],
                        },
                    }}

                        height="7rem"
                        boxSizing='border-box'
                        display='flex'
                        textAlign='center'
                        justifyContent='center'
                        alignItems='center'
                        flexDirection='column'
                        borderRadius={1}
                        p={.5}
                        gap={.5}
                        onDoubleClick={controlDiaEvento}
                    >
                        <Stack width="100%" justifyContent='center' alignItems="flex-start" alignContent="center" >
                            <Typography variant="subtitle2" color='textSecondary' alignContent="center" justifyItems="center" borderRadius={100}
                                sx={{
                                    backgroundColor: dia.isSame(moment(), 'day') ? 'primary.100' : 'transparent',
                                    width: "24px",
                                    height: "24px"
                                }}
                            >{dia.date()}</Typography>
                        </Stack>
                        <Stack height="100%" width="100%" gap={1} sx={{ overflowY: "auto" }}>
                            <Evento horaInicio='9:00am' horaFin="2:00pm" descripcion='Capacitacion Obligatoria' />
                            <Evento horaInicio="9:00am" horaFin="2:00pm" descripcion='Capacitacion Obligatoria' />
                        </Stack>
                    </Box>
                ))}
                <ListaEventos open={abrirDrawer} onClose={controlDiaEvento} />
            </Stack>
        </Box>
    );
};

export const Calendario = () => {

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
            <ContenedorDias fechaActual={fechaActual} cambiarFechaActual={cambiarFechaActual} />
            <AgregarEvento open={open} onClose={abrirCerrarDrawer} />
        </Box>
    );
};
