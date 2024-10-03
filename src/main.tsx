import './index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { SincoTheme } from './Theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>

      {/* Inicio componente Adjuntar */}
      {/* <AdjuntarArchivo fecthDB={console.log} /> */}
      {/* Fin componente Adjuntar */}

    </React.StrictMode>
  </ThemeProvider>
);
