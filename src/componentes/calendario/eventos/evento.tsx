import React, { useState } from "react";
import { Card, Stack, Typography, Popper, Box, Divider, Tooltip } from "@mui/material";
import { SincoTheme } from "../../../Theme";

export type EventoProps = {
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
            alignItems: 'center',
            textAlign: 'left',
            height: "1.2rem",
            minHeight: '1.2rem',
            overflowY: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
            gap: 1,
            p: 0.5,
        }} elevation={1}
        >

            <Tooltip title={descripcion} >
                <Stack flexDirection={"row"} sx={{ width: '10rem' }} gap={.5}>
                    <Typography variant='caption' color={SincoTheme.palette.text.secondary}>{hora}</Typography>
                    <Typography variant='body2' color={SincoTheme.palette.text.primary}
                        sx={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                        {descripcion}  Desde, {hora} - hasta  2:00 pm {descripcion}

                    </Typography>
                </Stack>
                {/* <Box >
                    <Stack>
                        <Typography variant="body2" color={SincoTheme.palette.text.secondary}>
                            {descripcion}
                        </Typography>
                        <Typography variant="body2" color={SincoTheme.palette.text.secondary}>
                            Desde, {hora} - hasta  2:00 pm
                        </Typography>
                    </Stack>
                </Box> */}
            </Tooltip>
        </Card>
    );
}
