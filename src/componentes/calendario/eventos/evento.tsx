import React from "react";
import { Card, Stack, Typography, Tooltip, PaletteColor } from "@mui/material";

export type EventoProps = {
    horaInicio: string;
    horaFin: string;
    descripcion: string;
    tipoEvento?: PaletteColor;
}

export const Evento: React.FC<EventoProps> = ({ horaInicio, horaFin, descripcion, tipoEvento }) => {
    return (
        <Card sx={{
            backgroundColor: "background.paper",
            display: "flex",
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
            height: "1.2rem",
            minHeight: '1.2rem',
            overflow: 'hidden',
            width: '100%',
            gap: 1,
        }} elevation={1}
        >
            <Tooltip arrow title={`${descripcion} Desde, ${horaInicio} - hasta ${horaFin}`}
            >
                <Stack direction="row" gap={.5} p={.5} sx={{ width: '100%' }}>

                    <Card sx={{ backgroundColor: tipoEvento ? tipoEvento[300] : (theme) => theme.palette.primary[300], width: 4 }} />

                    <Stack direction="row" gap={.5} sx={{ width: '100%' }}>
                        <Typography variant='caption' color="text.secondary">
                            {horaInicio}
                        </Typography>
                        <Stack alignItems="center" maxWidth="6.5rem" justifyContent="center" >
                            <Typography variant='body2' color="text.primary"
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    flex: 1,
                                    width: '100%',
                                }}
                            >
                                {descripcion}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Tooltip>
        </Card>
    );
};
