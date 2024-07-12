import React from "react";
import { Card, Stack, Typography } from "@mui/material";
import { SincoTheme } from "../../../Theme";

export interface EventoProps {
    hora: string;
    descripcion: string;
}

export const Evento: React.FC<EventoProps> = ({ hora, descripcion }) => {
    return (
        <Card sx={{
            backgroundColor: SincoTheme.palette.background.paper,
            borderLeft: "0.313rem solid #058C97",
            display: "flex",
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxHeight: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '8.75rem',
            gap: 1,
            p: 0.5,
        }} elevation={1}>
            <Stack flexDirection={"row"} sx={{ maxWidth: '100%' }} gap={1}>
                <Typography variant='caption' color={SincoTheme.palette.text.secondary}>{hora}</Typography>
                <Typography variant='body2' color={SincoTheme.palette.text.primary}
                    sx={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                    {descripcion}
                </Typography>
            </Stack>
        </Card>
    )
}
