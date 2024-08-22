import { useCallback, useState } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import moment, { Moment } from 'moment';
import { ContenedorDiasProps } from '../..';
import { EventoCalendario, ListaEventos } from '..';

export const ContenedorDias = ({fechaActual, eventos }: ContenedorDiasProps) => {

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
                {obtenerDiasAMostrar().map((fecha, index) => {
                    const eventosFecha = eventos.filter(evento => moment(evento.fecha).startOf("day").isSame(fecha.startOf("day")))
                    return (
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
                                        backgroundColor: fecha.isSame(moment(), 'day') ? 'primary.100' : 'transparent',
                                        width: "24px",
                                        height: "24px"
                                    }}
                                >{fecha.date()}</Typography>
                            </Stack>
                            <Stack height="100%" width="100%" gap={1} sx={{ overflowY: "auto" }}>
                                {
                                    eventosFecha.map((eve, index) => <EventoCalendario
                                        key={index} {...eve} />)
                                }
                            </Stack>
                        </Box>
                    )
                })}
                <ListaEventos open={abrirDrawer} onClose={controlDiaEvento} />
            </Stack>
        </Box>
    );
};
