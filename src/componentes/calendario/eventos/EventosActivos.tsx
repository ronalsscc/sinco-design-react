import { Typography } from "@mui/material"
import { Drawer, EventoActivoProps } from "../.."
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';


const listaEventos = [
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm"
    },
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm"
    },
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "08:00 am",
        horaFin: "09:00 pm"
    },
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "09:00 am",
        horaFin: "2:00 pm"

    },
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "10:00 am",
        horaFin: "11:30 am"

    },
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "10:00 am",
        horaFin: "11:30 am"

    },
    {
        titulo: "Pago de Nómina - SINCO",
        descripcion: "Pago nómina",
        fecha: "09/10/2024",
        horaInicio: "10:00 am",
        horaFin: "11:30 am"

    },
];

export const EventosActivos: React.FC<EventoActivoProps> = ({ abrir, controlDialogo }) => {
    return (
        <Drawer
            title='Eventos activos'
            open={abrir}
            anchorActions='flex-end'
            anchor='right'
            width='420px'
            backgroundColor="background.paper"
            showActions={true}
            onClose={controlDialogo}
            sxActions={{
                backgroundColor: "background.paper"
            }}
        >
            {listaEventos.map((evento, index) => (
                <Accordion key={index} defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <Typography variant="subtitle2" color="text.primary">
                            {evento.titulo}
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle2" color="text.secondary">
                            {evento.descripcion} | {evento.fecha} | {evento.horaInicio} - {evento.horaFin}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </Drawer>
    )
}