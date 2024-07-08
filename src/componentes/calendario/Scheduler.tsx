import React, { useCallback, useState } from 'react';
import moment, { Moment } from 'moment';
import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";
import { LightModeOutlined, ChevronRightOutlined, ChevronLeftOutlined, KeyboardArrowDownOutlined, FilterList } from '@mui/icons-material';
import { SincoTheme } from '../../Theme';
import { NuevoEvento } from './NuevoEvento';



const CambioDeFecha = ({ fechaActual, cambiarFechaActual }) => {

    const mesAnterior = useCallback(() => {
        cambiarFechaActual(prevDate => moment(prevDate).subtract(1, 'months'));
    }, []);

    const mesSiguiente = useCallback(() => {
        cambiarFechaActual(prevDate => moment(prevDate).add(1, 'months'));
    }, []);

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

const Calendario = ({ fechaActual }) => {
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
                        height='88px'
                        boxSizing='border-box'
                        display='flex'
                        textAlign='center'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='4px'
                        flexDirection='column'
                    >
                        <Stack width='100%' display='flex' justifyContent='flex-start' textAlign='start'>
                            <Typography variant="body2" color='textSecondary' p={1}>{dia.date()}</Typography>
                        </Stack>
                        <Stack height="90%">
                            <Card sx={{
                                backgroundColor: SincoTheme.palette.background.paper,
                                borderLeft: "5px solid #058C97",
                                display: "flex",
                                flexDirection: "row",
                                gap: 1,
                                p: 0.5
                            }} elevation={1}>
                                <Typography variant='caption' color={SincoTheme.palette.text.secondary}>8:30 am</Typography>
                                <Typography variant='body2' color={SincoTheme.palette.text.primary}>
                                    Capac. Oblig...
                                </Typography>
                            </Card>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export const Scheduler: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [fechaActual, cambiarFechaActual] = useState<Moment>(moment());

    const toggleDialog = useCallback(() => {
        setOpen(prevOpen => !prevOpen);
    }, []);

    return (
        <Box
            flex={1}
            gap='4px'
            height='auto'
            width='100%'
            sx={{
                backgroundColor: SincoTheme.palette.background.default
            }}
        >
            <Box display='flex' alignItems='center' justifyContent='space-between' p={1} gap='4px'>
                <Box display='flex' alignItems='center' justifyContent='center' gap={1}>
                    <img src='/Icono encabezado.svg' alt='icono_calendario.svg' />
                    <Typography variant='h6'>
                        Calendario de eventos
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' gap={2}>
                    <Button startIcon={<FilterList />} size="small" color="primary" variant='text'>Filtrar</Button>
                    <Button endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Año</Button>
                    <Button endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Mes</Button>
                    <Button size="small" color="primary" variant='contained' onClick={toggleDialog}>Nuevo evento</Button>
                </Box>
            </Box>

            <CambioDeFecha fechaActual={fechaActual} cambiarFechaActual={cambiarFechaActual} />
            <Calendario fechaActual={fechaActual} />
            <NuevoEvento open={open} toggleDialog={toggleDialog} />
        </Box>
    );
};
