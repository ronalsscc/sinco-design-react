import moment, { Moment } from 'moment/';
import { useCallback, useMemo, useState } from "react";
import { Stack, Typography, Divider, IconButton, Chip } from "@mui/material";
import { LightModeOutlined, NavigateBefore, NavigateNext, ArrowBackIos } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { CambioFechaProps } from "../..";

import 'moment/min/moment-with-locales.js';
moment.locale('es');

const ControlFechaPorDia = ({ fechaActual, cambiarFechaActual }: CambioFechaProps) => {

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
        <Stack flexDirection='row' alignItems='center' p={1} justifyContent='space-between' gap={1} bgcolor="background.paper" >
            <IconButton component={Link} to="/" >
                <ArrowBackIos fontSize='small' color='primary' />
            </IconButton>


            <Stack flexDirection='row' gap={1} justifyContent='center' alignItems='center'>
                <IconButton onClick={mesAnterior} >
                    <NavigateBefore fontSize='small' color='primary' />
                </IconButton>
                <Typography color="primary" variant="h6"> {fechaActual.format('D MMMM, YYYY')} </Typography>
                <IconButton onClick={mesSiguiente} >
                    <NavigateNext fontSize='small' color="primary" />
                </IconButton>
            </Stack>

            <Chip
                label="Hoy"
                icon={<LightModeOutlined color='primary' fontSize='small' />}
                onClick={retornarFechaActual}
                sx={{
                    backgroundColor: "primary.50"
                }}
            />

        </Stack>
    );
};

export const VistaDia = () => {

    const intervaloTiempo = useMemo(() => {
        const horaInicio = moment().startOf('day').hour(8);
        const horaFin = moment().startOf('day').hour(18);
        const hours = [];

        let currentHour = horaInicio.clone();
        while (currentHour <= horaFin) {
            hours.push(currentHour.format('H'));
            currentHour.add(1, 'hour');
        }
        return hours;
    }, []);

    const [fechaActual, cambiarFechaActual] = useState<Moment>(moment());

    return (
        <Stack height="100%" bgcolor="background.paper" p={1} spacing={1}>
            <ControlFechaPorDia fechaActual={fechaActual} cambiarFechaActual={cambiarFechaActual} />
            {intervaloTiempo.map((hour) => (
                <Stack key={hour} direction="row" spacing={1} alignItems="center">
                    <Typography variant="body2" color="textSecondary" width={60}>
                        {hour}:00
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Stack flexDirection={"row"} alignItems="center" justifyContent="flex-start" gap={1} p={1} flex={1} bgcolor="background.default" height={60} borderRadius={1}
                        sx={{
                            ':hover': {
                                backgroundColor: 'primary.50'
                            },
                        }} >
                        {/* <EventoCalendario horaInicio='9:00am' horaFin="2:00pm" descripcion='Capacitacion Obligatoria' /> */}
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};

