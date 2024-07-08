import * as React from 'react';
import { SincoTheme } from "../../Theme";
import { Box, Button, Typography , TextField} from "@mui/material";
import { Drawer } from "@sinco/react";


export interface NuevoEventoProps {
    open: boolean;
    toggleDialog: () => void;
}

export const NuevoEvento: React.FC<NuevoEventoProps> = ({ open, toggleDialog }) => {

    return (
        <Drawer
            open={open}
            anchorActions='flex-end'
            showActions={true}
            width='30%'
            onClose={toggleDialog}
            backgroundColor={SincoTheme.palette.background.paper}
            title='Nuevo evento'
            color='white'
            actions={
                <Box display="flex" gap={1}>
                    <Button variant='contained' onClick={toggleDialog}>Cerrar</Button>
                    <Button>Cerrar</Button>
                </Box>
            }
            children={
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
            }
        >
        </Drawer>
    )
}
