import React, { useCallback, useState } from 'react';
import moment, { Moment } from 'moment';
import { Box, Button, Card, Chip, Stack, Typography, Menu, MenuItem, TextField } from "@mui/material";
import { LightModeOutlined, ChevronRightOutlined, ChevronLeftOutlined, KeyboardArrowDownOutlined, FilterList } from '@mui/icons-material';
import { SincoTheme } from '../../Theme';
import { CambioFechaProps } from '..';
import { NuevoEvento } from './eventos/NuevoEvento';
import { Evento } from './eventos/evento';

const CambioDeFecha: React.FC<CambioFechaProps> = ({ fechaActual, cambiarFechaActual }) => {
    const mesAnterior = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment(fechaActual).subtract(1, 'months'));
    }, [fechaActual, cambiarFechaActual]);

    const mesSiguiente = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment(fechaActual).add(1, 'months'));
    }, [fechaActual, cambiarFechaActual]);

    return (
        <Box display='flex' flex={1} flexDirection='row' alignItems='center' justifyContent='space-between' sx={{
            backgroundColor: SincoTheme.palette.background.paper
        }}>
            <Chip sx={{
                backgroundColor: SincoTheme.palette.primary[50]
            }} icon={<LightModeOutlined color='primary' fontSize='small' />} label="Hoy" />
            <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems='center'>
                <Button variant="text" startIcon={<ChevronLeftOutlined />} onClick={mesAnterior} />
                <Typography color="primary" variant="h6"> {fechaActual.format('MMMM, YYYY')} </Typography>
                <Button variant="text" startIcon={<ChevronRightOutlined />} onClick={mesSiguiente} />
            </Box>
        </Box>
    );
};

const ContenedorDias: React.FC<CambioFechaProps> = ({ fechaActual }) => {
    const obtenerDiasAMostrar = useCallback(() => {
        let diasIteracion = [];
        const primerdiaDelMes = moment(fechaActual).startOf("month");
        const ultimoDiaMes = moment(fechaActual).endOf("month");

        for (let day = moment(primerdiaDelMes); day.isSameOrBefore(ultimoDiaMes); day.add(1, "day")) {
            diasIteracion.push(moment(day));
        }

        const primerdiaDelSiguienteMes = moment(fechaActual).add(1, "month").startOf("month");
        const longitudDeDias = diasIteracion.length;

        if ((longitudDeDias / 7) % 1 !== 0) {
            for (let day = moment(primerdiaDelSiguienteMes); day.day() <= (35 - longitudDeDias); day.add(1, "day")) {
                diasIteracion.push(moment(day));
            }
        }
        return diasIteracion;
    }, [fechaActual]);

    const diasDeLaSemana = moment.weekdays();

    return (
        <Box width='100%' boxSizing='border-box' justifyContent="center" gap={0.5} flexWrap='wrap' sx={{ backgroundColor: 'transparent' }}>
            <Stack display='grid' gridTemplateColumns="repeat(7, 1fr)" py={1}>
                {diasDeLaSemana.map((dia, index) => (
                    <Stack
                        key={`weekday-${index}`}
                        flexDirection="row"
                        alignItems='center'
                        justifyContent='center'
                        boxSizing='border-box'
                        borderRadius={1}
                    >
                        <Typography variant='caption' color={SincoTheme.palette.text.secondary}>
                            {dia}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Stack display='grid' gridTemplateColumns="repeat(7, 1fr)" gap={1}>
                {obtenerDiasAMostrar().map((dia, index) => (
                    <Box key={index} sx={{
                        backgroundColor: SincoTheme.palette.grey[50]
                    }}
                        height="5.5rem"
                        boxSizing='border-box'
                        display='flex'
                        textAlign='center'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius={1}
                        flexDirection='column'
                        overflow='hidden'
                    >
                        <Stack width='100%' display='flex' justifyContent='flex-start' textAlign='start'>
                            <Typography variant="body2" color='textSecondary' p={1}>{dia.date()}</Typography>
                        </Stack>
                        <Stack height="90%" sx={{ overflowY: 'auto' }} gap={1} >
                            <Evento hora='9:00 am' descripcion='COPASST' />
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export const Calendario: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, cambiarAnchor] = useState<null | HTMLElement>(null);
    const [fechaActual, cambiarFechaActual] = useState<Moment>(moment());

    const abrirCerrarDrawer = useCallback(() => {
        setOpen(prevOpen => !prevOpen);
    }, []);

    const obtenerAñoAMostrar = useCallback((evento: React.MouseEvent<HTMLButtonElement>) => {
        cambiarAnchor(evento.currentTarget);
    }, []);

    const cerrarMenu = useCallback(() => {
        cambiarAnchor(null);
    }, []);

    const obtenerAñoSeleccionado = useCallback((año: number) => {
        cambiarFechaActual(moment(fechaActual).year(año));
        cerrarMenu();
    }, [fechaActual, cambiarFechaActual, cerrarMenu]);

    const años = Array.from(new Array(15), (_valor, index) => moment().year() - index);

    return (
        <Box
            flex={1}
            gap={1}
            height='auto'
            width='100%'
            sx={{
                backgroundColor: SincoTheme.palette.background.default
            }}
        >
            <Box display='flex' alignItems='center' justifyContent='space-between' p={1} gap={1}>
                <Box display='flex' alignItems='center' justifyContent='center' gap={1}>
                    <img src='/Icono encabezado.svg' alt='icono_calendario.svg' />
                    <Typography variant='h6'>
                        Calendario de eventos
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent="center" gap={1}>
                    <Button startIcon={<FilterList />} size="small" color="primary" variant='text'> Filtrar </Button>
                    <Button onClick={obtenerAñoAMostrar} endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Año</Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={cerrarMenu} >
                        {años.map((año) => (
                            <MenuItem key={año} onClick={() => obtenerAñoSeleccionado(año)}>
                                {año}
                            </MenuItem>
                        ))}

                    </Menu>
                    <Button endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Mes</Button>
                    <Button size="small" color="primary" variant='contained' onClick={abrirCerrarDrawer}>Nuevo evento</Button>
                </Box>
            </Box>

            <CambioDeFecha fechaActual={fechaActual} cambiarFechaActual={cambiarFechaActual} />
            <ContenedorDias fechaActual={fechaActual} cambiarFechaActual={cambiarFechaActual} />
            <NuevoEvento open={open} toggleDialog={abrirCerrarDrawer} />
        </Box>
    );
};
