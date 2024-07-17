import React, { useState } from "react";
import { Card, Stack, Typography, Popper, Box, Divider } from "@mui/material";
import { SincoTheme } from "../../../Theme";

export type EventoProps = {
    hora: string;
    descripcion: string;
}

export const Evento: React.FC<EventoProps> = ({ hora, descripcion }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

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
            width: '7.5rem',
            gap: 1,
            p: 0.5,
        }} elevation={1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Stack flexDirection={"row"} sx={{ maxWidth: '100%' }} gap={.5}>
                <Typography variant='caption' color={SincoTheme.palette.text.secondary}>{hora}</Typography>
                <Typography variant='body2' color={SincoTheme.palette.text.primary}
                    sx={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                    {descripcion}
                </Typography>
            </Stack>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <Stack>
                        <Typography variant="body2" color={SincoTheme.palette.text.secondary}>
                            {descripcion}
                        </Typography>
                        <Typography variant="body2" color={SincoTheme.palette.text.secondary}>
                            Desde, {hora} - hasta  2:00 pm
                        </Typography>
                    </Stack>
                </Box>
            </Popper>
        </Card>
    );
}
