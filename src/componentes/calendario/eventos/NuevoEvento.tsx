import * as React from 'react';
import moment from 'moment';
import { SincoTheme } from "../../../Theme";
import { Box, Button, Typography, TextField, Stack, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Autocomplete, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@mui/material";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { Drawer, NuevoEventoProps, UsuarioProps } from '../..';
import { HighlightOff } from '@mui/icons-material';



export const Usuarios: UsuarioProps[] = [
    { id: 1, name: 'María Paula García Romero', cargo: 'Contador publico', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Diana Álvarez Cárdenas', cargo: 'Scrum master', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Camila María Torres Alvarado', cargo: 'Auxiliar administrativo', avatar: 'https://via.placeholder.com/40' },
];


export const NuevoEvento: React.FC<NuevoEventoProps> = ({ open, toggleDialog }) => {

    const [fechaActual, cambiarFecha] = React.useState<moment.Moment | null>(moment('2022-04-17T15:30'));
    const [evento, cambiarEvento] = React.useState('');

    const [usuario, cambiarUuario] = React.useState<UsuarioProps | null>(null);


    const obtenerSeleccionEvento = (evento: SelectChangeEvent) => {
        cambiarEvento(evento.target.value as string);
    };

    return (
        <Drawer
            open={open}
            anchorActions='flex-end'
            anchor='right'
            showActions={true}
            width='420px'
            onClose={toggleDialog}
            backgroundColor={SincoTheme.palette.background.paper}
            title='Nuevo evento'
            actions={
                <Box display="flex" gap={1}>
                    <Button variant='text' onClick={toggleDialog}>Cancelar</Button>
                    <Button variant='contained' onClick={toggleDialog} >Guardar</Button>
                </Box>
            }
            children={
                <Stack
                    gap={2}
                    p={1}
                    textAlign="center"
                >
                    <Typography variant='body1' textAlign={"left"} color={SincoTheme.palette.text.secondary}>
                        Ingresa datos del evento
                    </Typography>

                    <Stack gap={2} justifyContent={"center"} >
                        <TextField
                            label="Nombre del evento"
                            size="small"
                            variant="outlined"
                        />
                        <Stack gap={1} flexDirection={"row"} alignItems={"center"} >
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
                            <DateRangePicker localeText={{ start: 'Hora inicio', end: 'Hora fin' }} />
                        </LocalizationProvider>
                    </Stack>


                    <Stack gap={1} justifyContent={"center"}>
                        <Typography variant='body1' textAlign={"left"} color={SincoTheme.palette.text.secondary}>
                            Ingresa asistentes
                        </Typography>

                        <Autocomplete
                            options={Usuarios}
                            getOptionLabel={(option) => option.cargo}
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
                                        <Avatar sx={{ backgroundColor: SincoTheme.palette.warning.main, width: "2rem", height: "2rem" }} >
                                            <Typography variant="overline">CT</Typography>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={option.name} secondary={option.cargo} />
                                </ListItem>
                            )}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                        />

                    </Stack>

                    <Stack gap={2}>
                        <Typography variant='body1' textAlign={"left"} color={SincoTheme.palette.text.secondary}>
                            Agrega alguna descripción
                        </Typography>

                        <TextField
                            id="outlined-textarea"
                            label=""
                            placeholder="Descripcion del evento"
                            multiline
                        />
                    </Stack>

                </Stack>
            }
        >
        </Drawer>
    )
}
