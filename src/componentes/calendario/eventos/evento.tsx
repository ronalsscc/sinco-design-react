import * as React from 'react';
import { Button, Card, Popover, Stack, Typography } from "@mui/material";
import { EditarEvento } from '../..';

export interface EventoProps {
    horaInicio: string;
    horaFin: string;
    descripcion: string;
}

export const Evento: React.FC<EventoProps> = ({ horaInicio, horaFin, descripcion }) => {

    const [editar, controlEditar] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);;

    const EsEditable = React.useCallback(() => {
        controlEditar(prev => {
            if (prev) {
                handleClose();
            }
            return !prev;
        });
    }, []);

    const open = Boolean(anchorEl);

    return (
        <>
            <Card
                sx={{
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
                }}
                elevation={1}
                onClick={handleClick}
            >
                <Stack direction="row" gap={.5} p={.5} sx={{ width: '100%' }} >
                    <Card sx={{ backgroundColor: (theme) => theme.palette.primary[300], width: 4 }} />
                    <Stack direction="row" gap={.5} sx={{ width: '100%' }} >
                        <Typography variant='caption' color="text.secondary">
                            {horaInicio}
                        </Typography>
                        <Stack alignItems="center" maxWidth="7rem"  justifyContent="center">
                            <Typography
                                variant='body2'
                                color="text.primary"
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
            </Card>

            <Popover
                id="event-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Stack width="250px" spacing={1} p={1} > 
                    <Typography variant='h6' color={(theme) => theme.palette.primary.main}>
                        {descripcion}
                    </Typography>
                    <Typography variant='subtitle2' color="text.secondary">
                        Desde: {horaInicio} - {horaFin}
                    </Typography>

                    <Stack flexDirection="row" justifyContent="flex-end" >
                        <Button variant='contained' size='small' onClick={EsEditable} >Ver evento</Button>
                    </Stack>
                </Stack>
            </Popover>
            <EditarEvento open={editar} onClose={EsEditable} />
        </>
    );
};
