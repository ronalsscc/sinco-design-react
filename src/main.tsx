import React from 'react';
import ReactDOM from 'react-dom/client';
// import { SincoTheme } from './Theme';
import { AdjuntarArchivo, Calendario, VistaDia } from '.';
import { Avatar, Chip, Fab, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.css";
import moment from 'moment';
// import FullFeaturedCrudGrid from './componentes/Adjuntar/EjemploAdjuntar';
import { AddIcCallOutlined } from '@mui/icons-material';
import { SincoTheme } from './Theme';
// import { SincoTheme } from '@sinco/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <Calendario eventos={[
                {
                  fecha: moment("29/08/2023", "DD/MM/YYYY").toDate(),
                  horaFin: "10:00 am ",
                  horaInicio: "12:00 pm",
                  nombreEvento: "Big calendar",
                  organizador: "Sebastian Vera"
                },
                {
                  fecha: moment().toDate(),
                  horaFin: "10:00 am ",
                  horaInicio: "12:00 pm",
                  nombreEvento: "Investigacion ",
                  organizador: "Sebastian Vera"
                },
                {
                  fecha: moment("19/08/2024", "DD/MM/YYYY").toDate(),
                  horaFin: "de",
                  horaInicio: "fr",
                  nombreEvento: "Capacitacion ",
                  organizador: "Sebastian Vrra"
                },
                {
                  fecha: moment("9/08/2024", "DD/MM/YYYY").toDate(),
                  horaFin: "11:00 am",
                  horaInicio: "4:00pm",
                  nombreEvento: "Calendar",
                  organizador: "Sebastian Vera"
                },
              ]} />
            } 
          />
          <Route path="/VistaDia" element={<VistaDia />} />
        </Routes>
      </Router>

      {/* Other components */}
      {/* <AdjuntarArchivo fecthDB={console.log} /> */}
      {/* <DisableStopEditModeOnFocusOut /> */}


    </React.StrictMode>
  </ThemeProvider>
);
