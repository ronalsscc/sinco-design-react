import React, { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { Button, Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { SincoTheme } from "../../../Theme";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Formulario } from "..";

interface Evento {
  nombreEvento: string;
  fechaInicio: Moment | null;
  fechaFinal: Moment | null;
}

export const VistaDias: React.FC = () => {
  const [fechaActual, setFechaActual] = useState(moment());
  const [eventos, setEventos] = useState<{ [key: string]: Evento }>({});
  const [isFormularioOpen, setIsFormularioOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  const toggleFormulario = () => {
    setIsFormularioOpen(!isFormularioOpen);
  };

  const handleSaveEvento = (nuevoEvento: Evento) => {
    if (selectedHour) {
      setEventos((prevEventos) => ({
        ...prevEventos,
        [selectedHour]: nuevoEvento,
      }));
    }
    toggleFormulario();
  };

  const obtenerHoraFormato = useCallback((hora: string): string => {
    return moment(hora, "HH:mm").format("hh:mm A");
  }, []);

  const generarHoras = (): string[] => {
    const horas = [];
    for (let i = 7; i < 19; i++) {
      const hora = moment({ hour: i }).format("HH:mm");
      horas.push(hora);
    }
    return horas;
  };

  const horasDelDia = generarHoras();

  const diaAnterior = () => {
    const nuevaFecha = moment(fechaActual).subtract(1, "day");
    setFechaActual(nuevaFecha);
  };

  const diaSiguiente = () => {
    const nuevaFecha = moment(fechaActual).add(1, "day");
    setFechaActual(nuevaFecha);
  };

  const handleButtonClick = (hora: string) => {
    setSelectedHour(hora);
    toggleFormulario();
  };

  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"background.paper"}>
      <Stack
        sx={{
          "&:first-of-type": {
            borderWidth: "1px 0 0 1px",
          },
        }}
        border={`solid 1px ${SincoTheme.palette.grey[400]}`}
        height={"3rem"}
        display="grid"
        gridTemplateColumns={"10% repeat(1, 1fr)"}
      >
        <span
          style={{
            borderStyle: "solid",
            borderColor: SincoTheme.palette.grey[400],
            borderWidth: "0 1px 1px 0",
          }}
        ></span>
        <Stack
          flexDirection={"row"}
          alignItems="center"
          sx={{
            border: `solid 1px ${SincoTheme.palette.grey[400]}`,
            borderWidth: "0 1px 1px 0",
          }}
        >
          <IconButton size="small" color="primary" onClick={diaAnterior}>
            <ChevronLeftOutlined />
          </IconButton>
          <IconButton size="small" color="primary" onClick={diaSiguiente}>
            <ChevronRightOutlined />
          </IconButton>
          <Typography color={"primary.main"} alignContent={"center"}>
            {fechaActual.format("DD MMMM, YYYY")}
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        {horasDelDia.map((hora, index) => (
          <Stack
            flexDirection="row"
            key={index}
            height="3rem"
            display="grid"
            alignItems="center"
            gridTemplateColumns="10% repeat(1, 1fr)"
            sx={{
              "&:last-of-type": {
                borderWidth: "0 0 1px 1px",
              },
              borderStyle: "solid",
              borderColor: "grey.400",
              borderWidth: "0 1px 1px 1px",
            }}
          >
            <Stack
              height={"3rem"}
              justifyContent="center"
              borderRight="solid 1px #DCDEE0"
            >
              <Typography variant="body2" align="center" color={"text.primary"}>
                {obtenerHoraFormato(hora)}
              </Typography>
            </Stack>
            <Stack>
              <Card
                // variant="text"
                sx={{ height: 48 }}
                onClick={() => handleButtonClick(hora)}
              >
                <CardContent>
                  {eventos[hora] && eventos[hora].nombreEvento}
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Formulario
        open={isFormularioOpen}
        toggleDialog={toggleFormulario}
      // onSave={handleSaveEvento}
      />
    </Stack>
  );
};
