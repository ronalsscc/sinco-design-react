import React from 'react'
import ReactDOM from 'react-dom/client'
import { SincoTheme } from './Theme'
import { Calendario, VistaDia } from '.'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Calendario />} />
          <Route path="/vistaDia" element={<VistaDia />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </ThemeProvider>
)

