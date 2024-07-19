import React from "react";
import { Card, Stack, Typography, Tooltip, CardContent, Box } from "@mui/material";
import { SincoTheme } from "../../../Theme";

export interface EventoProps {
    horaInicio: string;
    horaFin: string;
    descripcion: string;
    tipoEvento?: string;
}

export const Evento: React.FC<EventoProps> = ({ horaInicio, horaFin, descripcion, tipoEvento }) => {
    return (
        <Card sx={{
            backgroundColor: SincoTheme.palette.background.paper,
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
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -20],
                                },
                            },
                        ],
                    },
                }}
            >
                <Stack direction="row" gap={.5} p={.5} sx={{ width: '100%' }}>
                    <Card sx={{ backgroundColor: tipoEvento || SincoTheme.palette.primary.main, width: 4 }}>
                        <CardContent sx={{ p: 0 }}></CardContent>
                    </Card>

                    <Stack direction="row" gap={.5} sx={{ width: '100%' }}>
                        <Typography variant='caption' color={SincoTheme.palette.text.secondary}>
                            {horaInicio}
                        </Typography>
                        <Stack alignItems={"center"} maxWidth={"7.5rem"} justifyContent={"center"} >
                            <Typography variant='body2' color={SincoTheme.palette.text.primary}
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
