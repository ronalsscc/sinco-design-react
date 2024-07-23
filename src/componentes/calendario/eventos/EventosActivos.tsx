import { Chip, Divider, Stack, Typography } from "@mui/material"
import { Drawer, EventoActivoProps } from "../.."
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { SincoTheme } from "../../../Theme";


const listaEventos = [
    {
        titulo: "Pago de Nómina - SINCO Evento de Pago nómina ",
        descripcion: "Se determinan requerimiento para evento de Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm",
        asistentes: ["María Paula García Romero", "Diana Álvarez Cárdenas", "Camila María Torres Alvarado"]
    },
    {
        titulo: "Capacitacion obligatoria",
        descripcion: "Capacitacion de empleados para un uso correcto del Desing system ",
        fecha: "22/09/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm",
        asistentes: ["María Paula García Romero", "Diana Álvarez Cárdenas", "Camila María Torres Alvarado"]
    },
];

export const EventosActivos: React.FC<EventoActivoProps> = ({ abrir, controlDialogo }) => {
    return (
        <Drawer
            title='Eventos activos'
            open={abrir}
            anchorActions='flex-end'
            anchor='right'
            width='26.25rem'
            backgroundColor="background.paper"
            showActions={true}
            onClose={controlDialogo}
            sxActions={{
                backgroundColor: "background.paper"
            }}
        >
            {listaEventos.map((evento, index) => (
                <Accordion key={index} elevation={0}

                >
                    <AccordionSummary
                        sx={{
                            borderRadius: 0,
                            borderBottom: `0.063rem solid ${SincoTheme.palette.grey[300]}`
                        }}
                        expandIcon={<ExpandMore />}
                    >
                        <Typography variant="subtitle2" color="text.primary">
                            {evento.titulo}
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack gap={1}>
                            <Typography variant="subtitle2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                                Fecha:
                                <Typography variant="subtitle2" color="text.secondary">
                                    {evento.fecha} | Desde, {evento.horaInicio} - {evento.horaFin}
                                </Typography>
                            </Typography>

                            <Typography variant="subtitle2" color="text.secondary">
                                {evento.descripcion}
                            </Typography>

                            <Stack alignItems="flex-start" gap={1} >
                                <Typography variant="subtitle2" color="text.secondary" display="flex" alignItems="center" justifyContent="flex-start" flexDirection="column">
                                    Asistentes :
                                </Typography>
                                <Stack gap={1} flexDirection="row" flexWrap="wrap" >
                                    {evento.asistentes.length > 0 ? (
                                        evento.asistentes.map((asistente, index) => (
                                            <Chip key={index} label={asistente} sx={{
                                                backgroundColor: (theme) => theme.palette.primary[50]
                                                // color: "white"
                                            }} />
                                        ))
                                    ) : (
                                        <Typography key={index} variant="body2">No hay asistentes para este evento</Typography>
                                    )}
                                </Stack>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Drawer>
    )
}