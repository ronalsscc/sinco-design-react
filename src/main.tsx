import React from 'react'
import ReactDOM from 'react-dom/client'
import { SincoTheme } from './Theme'
import { Calendario, VistaDia } from '.'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.css";
import { AdjuntarArchivo } from './componentes/Adjuntar/AdjuntarArchivos'
import moment from 'moment'
import { EjemploAdjuntar } from './componentes/Adjuntar/EjemploAdjuntar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      {/* <Router>
        <Routes>
          <Route path="/" element=
            {<Calendario eventos={[
              {
                fecha: moment("29/08/2023", "DD/MM/YYYY").toDate(),
                horaFin: "10:00 am ",
                horaInicio: "12:00 pm",
                nombreEvento: "Farruko ",
                organizador: "Sebastian "
              },
              {
                fecha: moment().toDate(),
                horaFin: "10:00 am ",
                horaInicio: "12:00 pm",
                nombreEvento: "Farruko ",
                organizador: "Sebastian "
              },
              {
                fecha: moment("19/08/2024", "DD/MM/YYYY").toDate(),
                horaFin: "de",
                horaInicio: "fr",
                nombreEvento: "Farruko ",
                organizador: "Sebastian "
              },
              {
                fecha: moment("9/08/2024", "DD/MM/YYYY").toDate(),
                horaFin: "de",
                horaInicio: "fr",
                nombreEvento: "Farruko ",
                organizador: "Sebastian "
              },
            ]} />} />
          <Route path="/vistaDia" element={<VistaDia />} />
        </Routes>
      </Router> */}
      <EjemploAdjuntar />
    </React.StrictMode>
  </ThemeProvider>
)

