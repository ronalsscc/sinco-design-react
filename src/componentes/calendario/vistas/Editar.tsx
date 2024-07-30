import * as React from 'react';
import moment from 'moment';
import { UsuarioProps, Usuarios } from '../..';
import CalendarICon from '../../../assets/icons/svgs/Calendario.svg';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Typography, TextField, Stack, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Autocomplete, ListItem, ListItemAvatar, ListItemText, Avatar, Chip } from "@mui/material";
import { Clear } from '@mui/icons-material';

export const Editar = () => {

  const [evento, cambiarEvento] = React.useState('');
  const [usuario, cambiarUsuario] = React.useState<UsuarioProps | null>(null);
  const [asistentes, cambiarAsistentes] = React.useState<UsuarioProps[]>([]);

  const obtenerSeleccionEvento = (evento: SelectChangeEvent) => {
    cambiarEvento(evento.target.value as string);
  };


  const agregarAsistente = (event: React.ChangeEvent<{}>, value: UsuarioProps | null) => {
    if (value && !asistentes.find(asistente => asistente.id === value.id)) {
      cambiarAsistentes([...asistentes, value]);
    }
    cambiarUsuario(null);
  };

  const eliminarAsistente = (id: number) => {
    cambiarAsistentes(asistentes.filter(asistente => asistente.id !== id));
  };
  return (
    <Stack
      width="100%"
      height="100%"
    //   alignItems="center"
      justifyItems="center"
    >
      <Stack p={1} flexDirection="row" alignItems='center' justifyContent='center' >
        {/* <img src={CalendarICon} alt='icono_calendario.svg' style={{ width: '2.75rem', height: '2.75rem' }} /> */}
        <Typography variant='h6'>
          Informacion del evento
        </Typography>
      </Stack>

      <Stack
        gap={2}
        p={1}
        width={"60%"}
        height="100%"
      >
        {/* <Typography variant='body1' textAlign="left" color="text.secondary">
          Información del evento
        </Typography> */}

        <Stack gap={2} justifyContent="center"  >
          <TextField
            label="Nombre del evento"
            size="small"
            variant="outlined"
          />
          <Stack width="100%" gap={2} flexDirection="row" alignItems="center" justifyContent="space-between" >
            <LocalizationProvider dateAdapter={AdapterMoment} >
              <DatePicker label="Fecha evento" sx={{ width: "50%" }}
                defaultValue={moment('2024-04-17T15:00')} />
            </LocalizationProvider>

            <FormControl sx={{ width: "50%" }} >
              <InputLabel>Tipo evento</InputLabel>
              <Select
                value={evento}
                label="Tipo evento"
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

        <Stack gap={1} justifyContent="center" width={"100%"}>
          <Typography variant='body1' textAlign={"left"} color="text.secondary">
            Asistentes
          </Typography>
          <Stack direction="row" width={"100%"} flexWrap="wrap" gap={1} maxWidth={"100%"}>
            {asistentes.map((asistente) => (
              <Chip
                size='medium'
                key={asistente.id}
                label={asistente.name}
                deleteIcon={<Clear fontSize='small' />}
                onDelete={() => eliminarAsistente(asistente.id)}
                sx={{
                  backgroundColor: (theme) => theme.palette.primary[50],
                }}
              />
            ))}
          </Stack>
          <Autocomplete
            options={Usuarios}
            getOptionLabel={(option) => option.name}
            value={null}
            onChange={agregarAsistente}
            renderInput={(params) => <TextField {...params} placeholder='Buscar por nombre' variant="outlined" />}
            renderOption={(props, option) => (
              <ListItem {...props} key={option.id}>
                <ListItemAvatar >
                  <Avatar sx={{
                    backgroundColor: (theme) => theme.palette.warning.main,
                    width: "2rem", height: "2rem",

                  }}
                  >
                    <Typography variant='overline' color="common.white">DZ</Typography>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={option.name} />
              </ListItem>
            )}
            isOptionEqualToValue={(option, value) => option.id === value?.id}
          />
        </Stack>

        <Stack gap={2} height={"auto"}>
          <Typography variant='body1' textAlign={"left"} color="text.secondary">
            Agrega alguna descripción
          </Typography>

          <TextField
            sx={{ height: "100%" }}
            id="outlined-textarea"
            placeholder="Descripción del evento"
            multiline
          />
        </Stack>
      </Stack>
    </Stack>
  )
}