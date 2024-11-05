import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box, Stack, ThemeProvider } from '@mui/material';
import moment from 'moment';
import './main.css';
import { SincoTheme } from './Theme';
import { SincoCalendar } from './componentes/SincoCalendar/SincoCalendar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>

      <Box height={800}>
        <SincoCalendar
          onDoubleClickEvent={() => { console.log('funciono ') }}
          events={[
            {
              title: 'Reunión de equipo',
              start: moment().set({ hour: 10, minute: 0 }).toDate(),
              end: moment().set({ hour: 11, minute: 30 }).toDate(),
            },
            {
              title: 'Presentación de resultados',
              start: moment().add(1, 'day').set({ hour: 14, minute: 0 }).toDate(),
              end: moment().add(1, 'day').set({ hour: 15, minute: 0 }).toDate(),
            },
          ]}
        />
      </Box>


    </React.StrictMode>
  </ThemeProvider>
);
