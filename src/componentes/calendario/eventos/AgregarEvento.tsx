import * as React from 'react';
import moment, { Moment } from 'moment';
import { Drawer, controlAbrirCerrar, UsuarioProps, Usuarios } from '../..';
import { HighlightOff } from '@mui/icons-material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Button, Typography, TextField, Stack, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Autocomplete, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material";

export const AgregarEvento = ({ open, onClose }: controlAbrirCerrar) => {

    const [evento, setEvento] = React.useState('');
    const [usuario, setUsuario] = React.useState<UsuarioProps | null>(null);

    const obtenerSeleccionEvento = (evento: SelectChangeEvent) => {
        setEvento(evento.target.value as string);
    };


    return (
        <Drawer
            open={open}
            anchorActions='flex-end'
            anchor='right'
            showActions={true}
            width='26.25rem'
            onClose={onClose}
            backgroundColor="background.paper"
            title='Nuevo evento'
            actions={
                <Box display="flex" gap={1} >
                    <Button variant='text' size='small' onClick={onClose}>Cancelar</Button>
                    <Button variant='contained' size='small' onClick={onClose} >Guardar</Button>
                </Box>
            }
        >
            <Stack
                gap={2}
                p={1}
                height="100%"
                textAlign="center"
            >
                <Typography variant='body1' textAlign="left" color="text.secondary">
                    Ingresa datos del evento
                </Typography>

                <Stack gap={2} justifyContent="center" >
                    <TextField
                        label="Nombre del evento"
                        size="small"
                        variant="outlined"
                    />
                    <Stack gap={1} flexDirection="row" alignItems="center" >
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker label="Fecha evento"
                                defaultValue={moment('2024-04-17T15:00')} />
                        </LocalizationProvider>

                        <FormControl sx={{ width: "50%" }}>
                            <InputLabel >Tipo evento</InputLabel>
                            <Select
                                value={evento}
                                label="Fecha evento"
                                onChange={obtenerSeleccionEvento}
                            >
                                <MenuItem value={10}>Tipo evento 1</MenuItem>
                                <MenuItem value={20}>Tipo evento 2</MenuItem>
                                <MenuItem value={30}>Tipo evento 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Stack flexDirection="row" width="100%" alignItems="center" gap={1}>
                            <TimePicker label="Hora inicio" />
                            -
                            <TimePicker label="Hora fin" />
                        </Stack>
                    </LocalizationProvider>
                </Stack>


                <Stack gap={1} justifyContent="center">
                    <Typography variant='body1' textAlign={"left"} color="text.secondary">
                        Ingresa asistentes
                    </Typography>

                    <Autocomplete
                        options={Usuarios}
                        getOptionLabel={(option) => option.name}
                        value={usuario}
                        renderInput={(params) => <TextField {...params} placeholder='Buscar por nombre' variant="outlined" />}
                        renderOption={(props, option) => (
                            <ListItem {...props} key={option.id}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <HighlightOff fontSize="small" />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar >
                                    <Avatar sx={{
                                        backgroundColor: (theme) => theme.palette.warning.main,
                                        width: "2rem", height: "2rem"
                                    }}
                                    >
                                        <Typography variant="overline" color="common.white">CT</Typography>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={option.name} secondary={option.name} />
                            </ListItem>
                        )}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                    />
                </Stack>

                <Stack gap={2} height={"auto"}>
                    <Typography variant='body1' textAlign={"left"} color="text.secondary">
                        Agrega alguna descripción
                    </Typography>

                    <TextField
                        sx={{ height: "100%" }}
                        id="outlined-textarea"
                        placeholder="Descripcion del evento"
                        multiline
                    />
                </Stack>

            </Stack>
        </Drawer>
    )
}
