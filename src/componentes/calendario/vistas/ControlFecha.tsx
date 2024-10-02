import { useCallback } from 'react';
import { Button, Chip, Stack, Typography, IconButton } from "@mui/material";
import { LightModeOutlined, NavigateNext, NavigateBefore, CalendarToday } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CambioFechaProps } from '../..';
import moment from 'moment/';
import 'moment/min/moment-with-locales';
moment().locale('es');

export const ControlFecha = ({ fechaActual, cambiarFechaActual }: CambioFechaProps) => {

    const mesAnterior = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment(fechaActual).subtract(1, 'months'));
    }, [fechaActual, cambiarFechaActual]);

    const mesSiguiente = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment(fechaActual).add(1, 'months'));
    }, [fechaActual, cambiarFechaActual]);

    const retornarFechaActual = useCallback(() => {
        if (cambiarFechaActual) cambiarFechaActual(moment());
    }, [cambiarFechaActual]);

    return (
        <Stack flexDirection='row' p={.5} alignItems='center' justifyContent='space-around' bgcolor="background.paper">
            <Chip
                sx={{
                    backgroundColor: "grey.200",
                    color: "text.secondary",
                    "&:hover": {
                        backgroundColor: "grey.100"
                    }
                }}
                icon={<LightModeOutlined fontSize='small' />}
                label="Hoy"
                onClick={retornarFechaActual}
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
            <Stack>
                <Button startIcon={<CalendarToday fontSize='small' />} size="small" color="primary" variant='outlined' component={Link} to="/vistaDia"> Día </Button>
            </Stack>
        </Stack>
    );
};