import React from 'react'
import ReactDOM from 'react-dom/client'
import { SincoTheme } from './Theme'
import { Calendario, VistaDia } from '.'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.css";
import { Adjuntar } from './componentes/Adjuntar'
import { AdjuntarArchivo } from './componentes/Adjuntar/AdjuntarArchivos'
import moment from 'moment'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element=
          {<Calendario eventos={[
            {
              fecha: new Date(),
              horaFin: "de",
              horaInicio: "fr",
              nombreEvento: "Farruko SINCO",
              organizador: "Sebastian Vera"
            },
            {
              fecha: new Date(),
              horaFin: "de",
              horaInicio: "fr",
              nombreEvento: "Farruko SINCO",
              organizador: "Sebastian "
            },
            {
              fecha: new Date(),
              horaFin: "de",
              horaInicio: "fr",
              nombreEvento: "Farruko SINCO",
              organizador: "Sebastian Vera"
            },
            {
              fecha: new Date(),
              horaFin: "de",
              horaInicio: "fr",
              nombreEvento: "Farruko SINCO",
              organizador: "Sebastian Vera"
            },
            {
              fecha: moment().add(10, "day").toDate(),
              horaFin: "de",
              horaInicio: "fr",
              nombreEvento: "Farruko SINCO",
              organizador: "Sebastian Vera"
            }
          ]}/>} />
          <Route path="/vistaDia" element={<VistaDia />} />
        </Routes>
      </Router>
      {/* <AdjuntarArchivo /> */}
    </React.StrictMode>
  </ThemeProvider>
)

