import { Chip, Typography, Stack, Dialog, DialogContent, IconButton } from "@mui/material"
import { Close, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { EventoCalendario, controlAbrirCerrar } from "../..";

export const ListaEventos = ({ open, onClose }: controlAbrirCerrar) => {
    // const eventosFecha = eventos.filter(evento => moment(evento.fecha).startOf("day").isSame(fecha.startOf("day")))
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogContent >
                <Stack gap={1} width="100%" alignItems="center" justifyItems="center">
                    <Stack width="100%" minWidth={"12.5rem"} flexDirection="row" justifyContent="space-between" >
                        <Typography variant="h6" color="text.primary">
                            Eventos
                        </Typography>
                        <IconButton onClick={onClose} size="small">
                            <Close fontSize="small" />
                        </IconButton>
                    </Stack> 
                    {/* {Eventoss.map((evento, index) => (
                        <Accordion key={index} defaultExpanded elevation={0} sx={{ width: "100%", boxShadow: "none !important" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                            >
                                <Typography variant="subtitle2" color="text.primary">
                                    {evento.titulo}
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack gap={1}>
                                    <Stack gap={1} flexDirection="row" alignItems="center" justifyItems="center">
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Organizador:
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {evento.organizador}
                                        </Typography>
                                    </Stack>

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
                                                        backgroundColor: (theme) => theme.palette.primary[50],
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
                    ))} */}
                </Stack>
            </DialogContent>
        </Dialog>
    )
}