import * as React from "react";
import { SincoTheme } from "../../Theme";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Drawer } from "@sinco/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";

export interface NuevoEventoProps {
  open: boolean;
  toggleDialog: () => void;
  onSave: (evento: Evento) => void;
}

interface Evento {
  nombreEvento: string;
  fechaInicio: dayjs.Dayjs | null;
  fechaFinal: dayjs.Dayjs | null;
}

export const NuevoEvento: React.FC<NuevoEventoProps> = ({
  open,
  toggleDialog,
  onSave,
}) => {
  const [evento, setEvento] = useState<Evento>({
    nombreEvento: "",
    fechaInicio: dayjs(),
    fechaFinal: dayjs(),
  });

  const handleNombreEventoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEvento({
      ...evento,
      nombreEvento: event.target.value,
    });
  };

  const handleFechaInicioChange = (date: dayjs.Dayjs | null) => {
    setEvento({
      ...evento,
      fechaInicio: date,
    });
  };

  const handleFechaFinalChange = (date: dayjs.Dayjs | null) => {
    setEvento({
      ...evento,
      fechaFinal: date,
    });
  };

  const handleGuardar = () => {
    onSave(evento);
  };

  return (
    <Drawer
      open={open}
      anchorActions="flex-end"
      showActions={true}
      width="30%"
      onClose={toggleDialog}
      backgroundColor={SincoTheme.palette.background.paper}
      title="Nuevo evento"
      color="white"
      actions={
        <Box display="flex" gap={1}>
          <Button variant="text" size="small" onClick={toggleDialog}>
            Cerrar
          </Button>
          <Button size="small" variant="contained" onClick={handleGuardar}>
            Guardar
          </Button>
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
          <Typography variant="body1" color={"text.secondary"}>
            Nuevo evento
          </Typography>
          <TextField
            label="Nombre del evento"
            size="small"
            variant="outlined"
            value={evento.nombreEvento}
            onChange={handleNombreEventoChange}
          />
          <Box display="flex" gap={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Inicio"
                value={evento.fechaInicio}
                onChange={handleFechaInicioChange}
              />
              <DatePicker
                label="Fin"
                value={evento.fechaFinal}
                onChange={handleFechaFinalChange}
              />
            </LocalizationProvider>
          </Box>
        </Box>
      }
    ></Drawer>
  );
};
