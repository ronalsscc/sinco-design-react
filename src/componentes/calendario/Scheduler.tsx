import React, { useCallback, useState } from 'react';
import moment, { Moment } from 'moment';
import { Box, Button, Card, Chip, Stack, TextField, Typography } from "@mui/material";
import { LightModeOutlined, ChevronRightOutlined, ChevronLeftOutlined, KeyboardArrowDownOutlined, FilterList } from '@mui/icons-material';
import { SincoTheme } from '../../Theme';
import { Drawer } from '@sinco/react';


const CambioDeFecha = () => {
    const [fechaActual, cambiarFechaActual] = useState<Moment>(moment());

    const mesAnterior = useCallback(() => {
        cambiarFechaActual((prevDate) => moment(prevDate).subtract(1, 'months'));
    }, []);

    const mesSiguiente = useCallback(() => {
        cambiarFechaActual((prevDate) => moment(prevDate).add(1, 'months'));
    }, []);

    return (
        <Box display={'flex'} flex={1} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{
            backgroundColor: SincoTheme.palette.background.paper
        }}>
            <Chip sx={{
                backgroundColor: SincoTheme.palette.primary[50]
            }} icon={<LightModeOutlined color='primary' fontSize='small' />} label="Hoy" />
            <Box display={'flex'} flexDirection={'row'} flex={1} justifyContent={'center'} alignItems={'center'} >
                <Button variant="text" startIcon={<ChevronLeftOutlined />} onClick={mesAnterior}></Button>
                <Typography color={"primary"} variant="h6"> {fechaActual.format('MMMM, YYYY')} </Typography>
                <Button variant="text" startIcon={<ChevronRightOutlined />} onClick={mesSiguiente}></Button>
            </Box>
        </Box>
    )
}

const Calendario = () => {

    const obtenerDiasAMostrar = () => {
        let diasIteracion: Moment[] = [];

        const diaActual = moment()
        const primerdiaDelMes = diaActual.startOf("month")

        const ultimoDiaMes = diaActual.endOf("month")

        for (let day = primerdiaDelMes; day.isSameOrBefore(ultimoDiaMes); day.add(1, "day")) {
            diasIteracion = [...diasIteracion, day]
        }

        const primerdiaDelSiguienteMes = diaActual.add(1, "month").startOf("month")
        const longitudDeDias = diasIteracion.length;

        if ((longitudDeDias / 7) % 1 != 0) {
            for (let day = primerdiaDelSiguienteMes; day.day() <= (35 - longitudDeDias); day.add(1, "day")) {
                diasIteracion = [...diasIteracion, day]
            }
        }
        return diasIteracion;
    }

    const diasDeLaSemana = moment.weekdays();

    return (
        <Box width={'100%'} boxSizing={'border-box'} justifyContent={"center"} gap={.5} flexWrap={'wrap'} sx={{ backgroundColor: 'transparent' }}>
            <Stack display={'grid'} gridTemplateColumns={"repeat(7, 1fr)"} py={1}>
                {diasDeLaSemana.map((dia, index) => (
                    <Stack
                        key={`weekday-${index}`}
                        flexDirection="row"
                        alignItems={'center'}
                        justifyContent={'center'}
                        boxSizing={'border-box'}
                        borderRadius={1}
                    >
                        <Typography variant='caption' color={SincoTheme.palette.text.secondary}>
                            {dia}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Stack display={'grid'} gridTemplateColumns={"repeat(7, 1fr)"} gap={1}>
                {obtenerDiasAMostrar().map((dia, index) => (
                    <Box key={index} sx={{
                        backgroundColor: SincoTheme.palette.grey[50]
                    }}
                        height={'88px'}
                        boxSizing={'border-box'}
                        display={'flex'}
                        textAlign={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={'4px'}
                        flexDirection={'column'}
                    >
                        <Stack width={'100%'} display={'flex'} justifyContent={'flex-start'} textAlign={'start'} >
                            <Typography variant="body2" color={'textSecondary'} p={1} > {dia.day()}</Typography>
                        </Stack>
                        <Stack height="90%" >
                            <Card sx={{
                                backgroundColor: SincoTheme.palette.background.paper,
                                borderLeft: "5px solid #058C97",
                                display: "flex",
                                flexDirection: "row",
                                gap: 1,
                                p: .5
                            }}
                                elevation={1}>
                                <Typography variant='caption' color={SincoTheme.palette.text.secondary} >8:30 am</Typography>
                                <Typography variant='body2' color={SincoTheme.palette.text.primary} sx={{

                                }}>Capac. Oblig...</Typography>
                            </Card>
                        </Stack>
                    </Box>
                ))}
            </Stack>



        </Box>
    )
}

const useDialog = () => {
    const [open, setOpen] = useState(false);

    const toggleDialog = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    }, []);

    return {
        open,
        toggleDialog,
    };
};

export const Scheduler: React.FC = () => {

    return (
        <Box
            flex={1}
            gap={'4px'}
            height={'auto'}
            width={'100%'}
            sx={{
                backgroundColor: SincoTheme.palette.background.default
            }}
        >
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={1} gap={'4px'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={1} >
                    <img src='/Icono encabezado.svg' alt='icono_calendario.svg' />
                    <Typography variant='h6' >
                        Calendario de eventos
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                    <Button startIcon={<FilterList />} size="small" color="primary" variant='text'>Filtrar</Button>
                    <Button endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Año</Button>
                    <Button endIcon={<KeyboardArrowDownOutlined />} size="small" color="primary" variant='outlined'>Mes</Button>
                    <Button size="small" color="primary" variant='contained' onClick={useDialog}>Nuevo evento</Button>
                    {/* <Drawer
                        open={false}
                        showActions={true}
                        width='30%'
                        onClose={useDialog}
                        backgroundColor={SincoTheme.palette.background.paper}
                        title='Nuevo evento'
                        color='white'
                        actions={
                            <Box display="flex" gap={1}>
                                <Button variant='contained'>Cerrar</Button>
                                <Button>Cerrar</Button>
                            </Box>}
                        children={
                            <>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    gap={1}
                                    p={1}
                                    textAlign="center"
                                >

                                    <Typography variant='body1' color={SincoTheme.palette.text.secondary}>
                                        Ingresa datos del evento
                                    </Typography>
                                    <TextField
                                        label="Nombre del evento"
                                        size="small"
                                        variant="outlined"
                                    />
                                    <Box display="flex" gap={1}>
                                        <TextField
                                            label=""
                                            size="small"
                                            type="number"
                                            variant="outlined"
                                        />
                                        <TextField
                                            label=""
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                            </>
                        }
                    >

                    </Drawer> */}
                </Box>
            </Box>


            <CambioDeFecha></CambioDeFecha>
            <Calendario />

        </Box>
    );
};
